const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const DataLoader = require("dataloader");
const db = require("./db/datasource");

const loaders = {
	booksLoader: new DataLoader(async (keys) => {
		const books = await db.Book.findAll({
			where: { authorId: keys },
			raw: true,
		});
		const groupByAuthor = books.reduce((acc, book) => {
			const { authorId, ...rest } = book;
			return acc[authorId]
				? { ...acc, [authorId]: [...acc[authorId], { ...rest }] }
				: { ...acc, [authorId]: [{ ...rest }] };
		}, {});
		return keys.map((key) => groupByAuthor[key]);
	}),
};

const resolvers = {
	Author: {
		books: (parent, _, { loaders }) => {
			const { id } = parent;
			return loaders.booksLoader.load(id);
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
			context: { db, loaders },
		});
		server.listen().then(({ url }) => {
			console.log(`🚀 Running on ${url}`);
		});
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});
