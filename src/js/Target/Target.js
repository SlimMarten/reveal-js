import Base from "./../Core/Base";

class Target extends Base {
	constructor(node, options = {}) {
		super(options);
		this.isTarget = true;
		this.node = node;
		this.isSpotted = false;
	}
}

export default Target;
