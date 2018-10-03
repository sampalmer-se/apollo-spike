import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList
} from "graphql";
import { getSaleCards, getSaleLabels, getPromotion } from "./resolvers";

const SaleCard = new GraphQLObjectType({
  name: "SaleCard",
  fields: () => ({
    id: { type: GraphQLString },
    saleLabelId: { type: GraphQLString },
    saleLabels: {
      type: SaleLabels,
      resolve: getSaleLabels
    },
    isFavourite: { type: GraphQLBoolean }
  })
});

const Promotion = new GraphQLObjectType({
  name: "Promotion",
  fields: () => ({
    id: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

const SaleLabels = new GraphQLObjectType({
  name: "SaleLabels",
  fields: () => ({
    promotionId: { type: GraphQLString },
    smartStay: { type: GraphQLBoolean },
    deposit: { type: GraphQLBoolean },
    flightsIncluded: { type: GraphQLBoolean },
    promotion: { type: Promotion, resolve: getPromotion, getCost: () => 1000 }
  })
});

const SecretEscapesQuery = new GraphQLObjectType({
  name: "SecretEscapes",
  fields: {
    saleCardList: {
      args: {
        id: {
          type: GraphQLInt
        }
      },
      type: new GraphQLList(SaleCard),
      resolve: getSaleCards
    }
  }
});

export const SecretEscapesSchema = new GraphQLSchema({
  query: SecretEscapesQuery
});
