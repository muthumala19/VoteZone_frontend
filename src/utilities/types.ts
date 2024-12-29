import { ApolloError } from '@apollo/client';

export interface IGraphQLResponse<T> {
  data: T;
}

export enum GraphQLErrorTypes {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  BAD_USER_INPUT = 'BAD_USER_INPUT',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  BAD_GATEWAY = 'BAD_GATEWAY',
  GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}

export interface ErrorObject {
  message: string;
  code: GraphQLErrorTypes;
}

export const getGraphQLError = (error: unknown): ErrorObject => {
  if (error instanceof ApolloError) {
    console.log('error', error);
    const graphQLErrors = error.graphQLErrors;
    if (graphQLErrors) {
      const errorObject = graphQLErrors.find((graphQLError) => {
        return graphQLError;
      });
      if (errorObject) {
        return {
          message: errorObject.message,
          code: errorObject.extensions?.code as GraphQLErrorTypes,
        };
      }
    }
  }
  console.log('error', error);

  return {
    message: 'Unknown error',
    code: GraphQLErrorTypes.INTERNAL_SERVER_ERROR,
  };
};
