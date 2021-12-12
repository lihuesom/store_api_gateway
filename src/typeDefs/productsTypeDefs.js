import { gql } from 'apollo-server';

export default gql`
  input ProductCreateInput {
    description: String!,
    image: String,
    name: String!,
    price: Float!,
    size:String!
  }
  type ProductDetail {
    id: Int!
    name: String!
    price: Float!
    description: String!
    image: String!
    size:String!
  }
  type Mutation {
    createProduct(productInput: ProductCreateInput!): ProductDetail
    updateProduct(productId: String!, ProductInput: ProductCreateInput!): ProductDetail
    deleteProduct(productId: String!): String
  }
  type Query {
    product(productId: String!): ProductDetail
    products: [ProductDetail]!
  }
`;