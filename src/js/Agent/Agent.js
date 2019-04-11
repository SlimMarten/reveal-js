import Base from "./../Core/Base";

class Agent extends Base {
	constructor(selector, options = {}) {
		super(options);
		this.targets = document.querySelectorAll(selector);
		console.log(this);
	}
}

export default Agent;
