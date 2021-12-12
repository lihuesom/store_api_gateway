import { ApolloServer} from "apollo-server";


import typeDefs from './typeDefs/index.js';
import resolvers from './resolvers/index.js';
import AuthUsersAPI from './dataSources/authUsersApi.js';
import ProductsAPI from './dataSources/productsApi.js';
import PurchasesAPI from './dataSources/purchasesApi.js';
import authentication from './utils/authentication.js';

const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources:()=>({
    AuthUsersAPI: new AuthUsersAPI(),
    ProductsAPI: new ProductsAPI(),
    PurchasesAPI: new PurchasesAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen().then(({url}) =>{
  console.log(`🚀  Server ready at ${url}`);
}) 
