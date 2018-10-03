import { ApolloServer } from "apollo-server-express";
import { SecretEscapesSchema as schema } from "./schema";
import express from "express";
import depthLimit from "graphql-depth-limit";
import { createComplexityLimitRule } from "graphql-validation-complexity";

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(10), createComplexityLimitRule()]
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
