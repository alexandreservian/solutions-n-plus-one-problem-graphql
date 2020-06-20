"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"books",
			[
				{
					id: 1,
					name: "Coming Up for Air",
					authorId: 1,
				},
				{
					id: 2,
					name: "Animal Farm",
					authorId: 1,
				},
				{
					id: 3,
					name: "Nineteen Eighty-Four",
					authorId: 1,
				},
				{
					id: 4,
					name: "The Genius and the Goddess",
					authorId: 2,
				},
				{
					id: 5,
					name: "Brave New World",
					authorId: 2,
				},
				{
					id: 6,
					name: "Point Counter Point",
					authorId: 2,
				},
				{
					id: 7,
					name: "Island",
					authorId: 2,
				},
				{
					id: 8,
					name: "A Clockwork Orange",
					authorId: 3,
				},
				{
					id: 9,
					name: "The Wanting Seed",
					authorId: 3,
				},
				{
					id: 10,
					name: "Fury on Sunday",
					authorId: 4,
				},
				{
					id: 11,
					name: "I Am Legend",
					authorId: 4,
				},
				{
					id: 12,
					name: "Anthem",
					authorId: 5,
				},
				{
					id: 13,
					name: "The Fountainhead",
					authorId: 5,
				},
				{
					id: 14,
					name: "Atlas Shrugged",
					authorId: 5,
				},
				{
					id: 15,
					name: "Fight Club",
					authorId: 6,
				},
				{
					id: 16,
					name: "Survivor",
					authorId: 6,
				},
				{
					id: 17,
					name: "Invisible Monsters",
					authorId: 6,
				},
				{
					id: 18,
					name: "Choke",
					authorId: 6,
				},
				{
					id: 19,
					name: "Lullaby",
					authorId: 6,
				},
				{
					id: 20,
					name: "Diary",
					authorId: 6,
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("books", null, {});
	},
};
