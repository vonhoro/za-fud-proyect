const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");
const redis = require("redis");
const session = require("express-session");

const RedisStore = require("connect-redis")(session);
const redisClient = redis.createClient();

// Hashing

const bcrypt = require("bcrypt");
const saltRounds = 10;

// sesions Dios 123 Devil 666  Demark Demark
// database

async function connectToDB(db, collection) {
  const uri = `mongodb://127.0.0.1:27017/`;
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  const database = client.db(db);
  return await database.collection(collection);
}

const schema = gql`
  input ShopInformationInput {
    name: String!
    horario: String!
    menuItems: [String!]
    contactInfo: [ContactInfoInput]
    foodInfo: [FoodInfoInput]
  }
  input ContactInfoInput {
    contactType: String!
    contactDetails: String!
  }
  input FoodInfoInput {
    type: String!
    foodDescription: FoodDescriptionInput!
  }

  input FoodDescriptionInput {
    name: String!
    priceTag: String
    price: Float!
    descripcion: String!
    picture: String!
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): RegisResponse
    login(username: String!, password: String!): RegisResponse
    createShop(input: ShopInformationInput): Error
  }
  type ShopInformation {
    error: Error
    name: String
    horario: String
    menuItems: [String]
    contactInfo: [ContactInfo]
    foodInfo: [FoodInfo]
  }
  type ContactInfo {
    contactType: String
    contactDetails: String
  }
  type FoodInfo {
    type: String
    foodDescription: FoodDescription
  }

  type FoodDescription {
    name: String
    priceTag: String
    price: Float
    descripcion: String
    picture: String
  }

  type Query {
    me: User
    shop(shopName: String!): ShopInformation
  }

  type RegisResponse {
    error: [Error]
    userInfo: User
  }
  type User {
    user: String
    userId: String
    welcome: String
  }

  type Error {
    item: String!
    message: String!
  }
`;

const resolvers = {
  Query: {
    me: async (parent, args, context, info) => {
      const db = await connectToDB("admin", "users");
      if (!context.req.session.userId) return null;
      const query = { _id: ObjectId(context.req.session.userId) };
      const options = { projection: { _id: 1, username: 1 } };
      const result = await db.findOne(query, options);

      const user = result.username;
      const id = result._id;
      return {
        user,
        userId: id,
        welcome: `Welcome back!`,
      };
    },
    shop: async (parent, { shopName }, context, info) => {
      const db = await connectToDB("admin", "shops");

      const name = shopName.replace(/-/g, " ");
      const shop = await db.findOne({ name });
      if (!shop) {
        const error = { item: "dataBase", message: "Pagina no existe" };

        return { error };
      }
      return shop;
    },
  },
  Mutation: {
    addUser: async (parent, args, { req }, info) => {
      try {
        const { username, email, password } = args;
        if (username.length < 3)
          return {
            error: [
              {
                item: "username",
                message: "El usuario debe tener mas de 2 caracteres",
              },
            ],
          };

        if (password.length < 8)
          return {
            error: [
              {
                item: "password",
                message: "La contraseña debe ser mayor a 8 caracteres",
              },
            ],
          };

        const db = await connectToDB("admin", "users");

        const userExist = await db.findOne({ username });

        if (userExist) {
          return {
            error: [
              {
                item: "username",
                message: "El usuario ya existe",
              },
            ],
          };
        }
        const mailExist = await db.findOne({ email });

        if (mailExist) {
          return {
            error: [
              {
                item: "email",
                message: " El correo ya existe",
              },
            ],
          };
        }

        const dateOfCreation = new Date();
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const userDocument = {
          username,
          email,
          password: hashPassword,
          contra: password,
          dateOfCreation,
          dateOfUpdate: "",
        };
        const result = await db.insertOne(userDocument);
        req.session.userId = result.insertedId;
        return {
          userInfo: {
            user: username,
            userId: result.insertedId,
            welcome: `Welcome to the jungle`,
          },
        };
      } catch (error) {
        return {
          error: [{ item: "Database", message: error }],
        };
      }
    },
    login: async (parent, args, { req, res }, info) => {
      try {
        const { username, password } = args;
        const db = await connectToDB("admin", "users");

        const query = { $or: [{ username }, { email: username }] };
        const options = { projection: { _id: 1, username: 1, password: 1 } };
        const hash = await db.findOne(query, options);

        if (!hash) {
          return {
            error: [
              {
                item: "username",
                message: "El usuario no existe",
              },
            ],
          };
        }
        const match = await bcrypt.compare(password, hash.password);

        if (!match)
          return {
            error: [
              {
                item: "password",
                message: "La contraseña es erronea",
              },
            ],
          };

        req.session.userId = hash._id;

        return {
          userInfo: {
            user: hash.username,
            userId: hash._id,
            welcome: `Welcome back!`,
          },
        };
      } catch (error) {
        return {
          error: [{ item: "Database", message: error }],
        };
      }
    },
    createShop: async (parent, { input }, context, info) => {
      const { contactInfo } = input;
      // console.log(input);

      const db = await connectToDB("admin", "shops");
      // console.log(contactInfo[0].contactType);

      await db.insertOne(input);
      return {
        item: "shop",
        message: "nada",
      };
    },
  },
};

// Middle ware

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(
  session({
    name: "id",
    store: new RedisStore({ client: redisClient, disableTouch: true }),

    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, //1 year
      sameSite: "lax",
      secure: false, //change to true when deployed
    },
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
  })
);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app, cors: corsOptions });
app.listen({ port: 8000 }, () => {
  console.log("conection on");
});
