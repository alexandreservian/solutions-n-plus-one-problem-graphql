"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"books",
			[
				{
					id: 1,
					title: "Coming Up for Air",
					authorId: 1,
				},
				{
					id: 2,
					title: "Animal Farm",
					authorId: 1,
				},
				{
					id: 3,
					title: "Nineteen Eighty-Four",
					authorId: 1,
				},
				{
					id: 4,
					title: "The Genius and the Goddess",
					authorId: 2,
				},
				{
					id: 5,
					title: "Brave New World",
					authorId: 2,
				},
				{
					id: 6,
					title: "Point Counter Point",
					authorId: 2,
				},
				{
					id: 7,
					title: "Island",
					authorId: 2,
				},
				{
					id: 8,
					title: "A Clockwork Orange",
					authorId: 3,
				},
				{
					id: 9,
					title: "The Wanting Seed",
					authorId: 3,
				},
				{
					id: 10,
					title: "Fury on Sunday",
					authorId: 4,
				},
				{
					id: 11,
					title: "I Am Legend",
					authorId: 4,
				},
				{
					id: 12,
					title: "Anthem",
					authorId: 5,
				},
				{
					id: 13,
					title: "The Fountainhead",
					authorId: 5,
				},
				{
					id: 14,
					title: "Atlas Shrugged",
					authorId: 5,
				},
				{
					id: 15,
					title: "Fight Club",
					authorId: 6,
				},
				{
					id: 16,
					title: "Survivor",
					authorId: 6,
				},
				{
					id: 17,
					title: "Invisible Monsters",
					authorId: 6,
				},
				{
					id: 18,
					title: "Choke",
					authorId: 6,
				},
				{
					id: 19,
					title: "Lullaby",
					authorId: 6,
				},
				{
					id: 20,
					title: "Diary",
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
