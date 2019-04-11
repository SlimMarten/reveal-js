import Base from "./../Core/Base";
import Target from "./../Target/Target";

class Agent extends Base {
	constructor(selector, options = {}) {
		super(options);
		this.isAgent = true;
		this.targets = [];
		document.querySelectorAll(selector).forEach(node => {
			this.targets.push(new Target(node));
		});

		// events
		window.addEventListener("resize", this.onResize.bind(this));
		window.addEventListener("scroll", this.onScroll.bind(this));

		// kick off
		this.routine();
	}

	onResize(e) {
		this.routine();
	}

	onScroll(e) {
		this.routine();
	}

	routine() {
		this.targets.forEach(target => {
			const node = target.node;
			const boundingBox = node.getBoundingClientRect();
			const top = boundingBox.top;
			const bottom = boundingBox.height + top;
			if (top < window.innerHeight && bottom > 0) {
				if (target.isSpotted) return;
				if (this.options.spottedClass) node.classList.add(this.options.spottedClass);
				this.dispatchEvent({ type: "targetEnter", item: target });
				target.isSpotted = true;
			} else {
				if (!target.isSpotted) return;
				if (this.options.spottedClass) node.classList.remove(this.options.spottedClass);
				this.dispatchEvent({ type: "targetLeave", item: target });
				target.isSpotted = false;
			}
		});
	}
}

export default Agent;
