import { ForbiddenError } from 'apollo-server';

export default {
  Query: {
    user: (_, { userId }, { dataSources, user }) => {
      if (user?.is_admin || user?.id === userId) return dataSources.AuthUsersAPI.getById(userId);
      throw new ForbiddenError('User not able to perform this request');
    },
    users: (_, __, { dataSources, user }) => {
      if (user?.is_admin) return dataSources.AuthUsersAPI.getUsers();
      throw new ForbiddenError('User not able to perform this request');
    },
  },
  Mutation: {
    register: (_, { userInput }, { dataSources }) => dataSources.AuthUsersAPI.create(userInput),
    login: (_, { credentials }, { dataSources }) => dataSources.AuthUsersAPI.login(credentials),
    refresh: (_, { refresh }, { dataSources }) => dataSources.AuthUsersAPI.refresh(refresh),
  },
  };