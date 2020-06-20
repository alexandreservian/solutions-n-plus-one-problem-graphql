"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("books", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			authorId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "authors", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
		});
	},

	down: (queryInterface) => {
		return queryInterface.dropTable("books");
	},
};
