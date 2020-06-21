module.exports = (sequelize, DataTypes) => {
	const Author = sequelize.define("author", {
		name: DataTypes.STRING,
	});
	Author.associate = (models) => {
		Author.hasMany(models.Book, {
			as: "books",
			foreignKey: "authorId",
		});
	};
	return Author;
};
