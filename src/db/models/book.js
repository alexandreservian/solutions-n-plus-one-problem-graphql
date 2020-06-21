module.exports = (sequelize, DataTypes) => {
	const Book = sequelize.define("book", {
		title: DataTypes.STRING,
	});
	Book.associate = (models) => {
		Book.belongsTo(models.MegaEvolution, {
			as: "authors",
			foreignKey: "authorId",
		});
	};
	return Book;
};
