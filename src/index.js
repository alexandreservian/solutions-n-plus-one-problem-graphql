const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const db = require("./db/datasource");

const resolvers = {
	Author: {
		books: (parent, _, { db }) => {
			const { id: authorId } = parent;
			return db.Book.findAll({ where: { authorId } });
		},
	},
	Query: {
		authors: (_, __, { db }) => db.Author.findAll(),
	},
};

db.sequelize
	.authenticate()
	.then(() => {
		const server = new ApolloServer({
			typeDefs: importSchema("./src/graph-ql/schema/index.graphql"),
			resolvers,
			context: { db },
		});
		server.listen().then(({ url }) => {
			console.log(`🚀 Running on ${url}`);
		});
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});
