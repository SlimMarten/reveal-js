import EventDispatcher from "./EventDispatcher";

class Base extends EventDispatcher {
	static Instances = [];
	static ID = 0;

	constructor(options) {
		super();
		this.isReveal = true;
		this.options = options;
		this.setId(this);
	}

	setId(object) {
		object.id = Base.ID;
		Base.ID++;
		Base.Instances.push(object);
	}
}

export default Base;
