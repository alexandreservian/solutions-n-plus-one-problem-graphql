"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"authors",
			[
				{
					id: 1,
					name: "George Orwell",
				},
				{
					id: 2,
					name: "Aldous Huxley",
				},
				{
					id: 3,
					name: "Anthony Burgess",
				},
				{
					id: 4,
					name: "Richard Matheson",
				},
				{
					id: 5,
					name: "Ayn Rand",
				},
				{
					id: 6,
					name: "Chuck Palahniuk",
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("authors", null, {});
	},
};
