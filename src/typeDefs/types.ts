import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User object',
  fields: {
    id: { type: GraphQLID, description: 'user id' },
    firstName: { type: GraphQLString, description: 'user firstname' },
    lastName: { type: GraphQLString, description: 'user lastname' },
    phone: { type: GraphQLString, description: 'user phone number' },
    password: { type: GraphQLString, description: 'user password' },
    confirmPassword: {
      type: GraphQLString,
      description: 'confirm user password'
    },
    token: {
      type: GraphQLString,
      resolve: (source, _args) => {
        return source.token;
      }
    }
  }
});

export { userType };
