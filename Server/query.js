mutation {
  createShop(
    input: {
      name: "Restaurant loco"
      horario: "8am - 7pm"
      menuItems: [
        "Ensaladas"
        "Sopas"
        "Entradas"
        "Carnes"
        "Pescados"
        "Pizzas"
      ]
      contactInfo: [
        { contactType: "whatsApp", contactDetails: "89849489W" }
        { contactType: "Numero de telefono", contactDetails: "8393099489W" }
        { contactType: "email", contactDetails: "nose@gpopeoom" }
      ]
      foodInfo: [
        {
          type: "Pizza"
          foodDescription: {
            name: "Pizza Magarita"
            priceTag: "usd"
            price: 5.9
            descripcion: "Una pizza con queso y tomate, bien sabrosa"
            picture: "pizza.picture.com"
          }
        }
        {
          type: "Pizza"
          foodDescription: {
            name: "Pizza Super"
            priceTag: "usd"
            price: 8
            descripcion: "Una pizza con queso, jamon, tocineta y cebolla"
            picture: "pizza.picture2.com"
          }
        }
        {
          type: "Pizza"
          foodDescription: {
            name: "Pizza Especial"
            priceTag: "usd"
            price: 12
            descripcion: "Una pizza con queso, camarones salchichas pi;a y sangre de virgen"
            picture: "pizza.picture3.com"
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
        {
          type: ""
          foodDescription: {
            name: ""
            priceTag: ""
            price: 21
            description: ""
            picture: ""
          }
        }
      ]
    }
  ) {
    message
    item
  }
}
