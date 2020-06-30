export default class Stack {
	constructor(){
		this.stack = [];
	};

	push(data){
		this.stack.push(data);
	}

	peep(){
		// console.log(this.stack[this.stack.length-1]);
		return this.stack[this.stack.length-1];
	}

	pop(){
		if (!this.stack.length) return false;
		let data = this.stack[this.stack.length-1];
		this.stack.pop();
		return data;
	}
}