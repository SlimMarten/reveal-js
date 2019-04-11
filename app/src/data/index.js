const packageConfig = require("./../../../package.json");
const about = require("./about").default;
const installation = require("./installation").default;
const agent = require("./agent").default;
const target = require("./target").default;

const data = {
	sections: [{ ...about }, { ...installation }, { ...agent }, { ...target }],
};

export default { ...packageConfig, ...data };
