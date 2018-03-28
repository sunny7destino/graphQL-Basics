const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4400, () => {
  console.log('Now listning for resquest on port 4400');
});
