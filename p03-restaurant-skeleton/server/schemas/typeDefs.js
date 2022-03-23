const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    recipeCount: Int
    recipes: [Recipe]
    friends: [User]
    comments: [Comment]
  }

  type Recipe {
    _id: ID
    recipeName: String
    recipeInstructions: String
    createdAt: String
    username: String
    ingredientCount: Int
    ingredients: [Ingredient]
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    recipes(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeName: String!, recipeInstructions: String!): Recipe
    addComment(recipeId: ID!, commentBody: String!): Recipe
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
