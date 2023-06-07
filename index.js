const { ApolloServer } = require("apollo-server");
const { getMesh } = require("@graphql-mesh/runtime");
const { findAndParseConfig } = require("@graphql-mesh/cli");
async function main() {
  const meshConfig = await findAndParseConfig();
  const { schema, contextBuilder } = await getMesh(meshConfig);
  const server = new ApolloServer({
    schema,
    context: contextBuilder,
  });
  server.listen().then(({ url }) => {
    console.log(`:rocket: Server ready at ${url}`);
  });
}
main().catch((err) => console.error(err));
