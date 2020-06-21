const Sequelize = require("sequelize");
const { readdirSync } = require("fs");
const { join } = require("path");
const config = require("../../config/index.json");
const toPascalCase = require("../../utils/to-pascal-case");

const env = process.env.NODE_ENV || "development";

const loadModels = (sequelize) => {
	const dir = join(__dirname, "../models");
	return readdirSync(dir).reduce((acc, file) => {
		const modelDir = join(dir, file);
		const model = require(modelDir)(sequelize, Sequelize);
		const nameModel = toPascalCase(model.name);
		return { ...acc, [nameModel]: model };
	}, {});
};

const sequelize = new Sequelize(config[env]);
const models = loadModels(sequelize);
// create relationships in the ORM
Object.values(models)
	.filter((model) => typeof model.associate === "function")
	.forEach((model) => model.associate(models));

module.exports = { sequelize, ...models };
