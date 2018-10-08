## Apollo Spike

This is a test setup of the Apollo GraphQL server. To run this, you need a dev json server.

```
npm install -g json-server

cd apollo-spike

json-server db.json
```

Run `yarn start` to start the server. Navigate to the url in the console and start testing queries.

```
query {
  saleCardList {
    id
  }
}
```

There are complexity limit validation rules and depth limit validation rules. Change these in src/index.js and see what effect they have on the queries.
There is a line in src/schema.js which artificially gives promotion a high complexity

`getCost: () => 1000`

You can change these values or add them to other fields and see what happens.
