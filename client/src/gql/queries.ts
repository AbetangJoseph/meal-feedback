import { gql } from 'apollo-boost';

const createUserMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $phone: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      password: $password
      email: $email
    ) {
      id
      firstName,
      password
    }
  }
`;

export { createUserMutation };
