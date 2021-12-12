import { gql } from 'apollo-server';

export default gql`
    type Tokens {
        refresh: String!
        access: String!
        id: Int!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
    input SignUpInput {
        username: String!
        password: String!
        first_name: String!
        last_name: String!
        email: String!
        country: String!
    }
    type UserDetail {
        id: Int!
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        is_admin: Boolean!
        country: String
        birth_day: String
    }
    type Mutation {
        register(userInput: SignUpInput): Tokens!
        login(credentials: CredentialsInput!): Tokens!
        refresh(refresh: String!): Access!
    }
    type Query {
        user(userId: Int!): UserDetail!
        users: [UserDetail!]
    }
`;