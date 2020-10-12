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

// const schema =  . . .
// const resolvers = . . .

const schema = gql`
  # so this is a comment lol greatttt
  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): RegisResponse
    login(username: String!, password: String!): RegisResponse
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
      console.log(context.req.session.userId);
      console.log("olaaa");
      const db = await connectToDB("admin", "users");
      if (!context.req.session.userId) return null;
      const query = { _id: ObjectId(context.req.session.userId) };
      const options = { projection: { _id: 1, username: 1 } };
      const result = await db.findOne(query, options);

      console.log(result.username);
      const user = result.username;
      const id = result._id;
      return {
        user,
        userId: id,
        welcome: `Welcome back!`,
      };
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
                item: "Username",
                message: "Username must be larger than 2 characters",
              },
            ],
          };

        if (password.length < 3)
          return {
            error: [
              {
                item: "Password",
                message: "Password must be larger than 2 characters",
              },
            ],
          };

        const db = await connectToDB("admin", "users");

        const userExist = await db.findOne({ username });

        if (userExist) {
          return {
            error: [
              {
                item: "Username",
                message: "Username already exist",
              },
            ],
          };
        }
        const mailExist = await db.findOne({ email });

        if (mailExist) {
          return {
            error: [
              {
                item: "E-mail",
                message: "E-mail already exist",
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
                item: "Username",
                message: "Username doesn't exist",
              },
            ],
          };
        }
        const match = await bcrypt.compare(password, hash.password);

        if (!match)
          return {
            error: [
              {
                item: "Password",
                message: "Password do Not match",
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
