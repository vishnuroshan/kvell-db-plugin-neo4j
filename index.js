/**
 * @type {import ("mongoose")}
 */
const neo4j = require("neo4j-driver");
/**
 * @type {import ("mongoose")}
 */
const driver = require("./init");

module.exports = {
    dbLib: neo4j,
    driver
};
