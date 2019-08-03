import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema
} from 'graphql';
import { userType } from './types';
import { createUser, userLogin } from '../controllers/users';

const query = new GraphQLObjectType({
  name: 'Queries',
  description: 'All requests to graphql servers',
  fields: {
    login: {
      type: userType,
      description: 'this gets a single user',
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (_source, args) => userLogin(args)
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'All operations to store, update and update data',
  fields: {
    createUser: {
      type: userType,
      description: 'creates a single user',
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (_source, args) => createUser(args)
    }
  }
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
