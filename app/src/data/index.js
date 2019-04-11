const packageConfig = require("./../../../package.json");
const about = require("./about").default;

const data = {
	sections: [{ ...about }],
};

export default { ...packageConfig, ...data };
