export default class Stack {
	constructor(){
		this.stack = [];
	};

	push(data){
		this.stack.push(data);
	}

	peep(){
		console.log(this.stack[this.stack.length-1]);
	}

	pop(){
		let data = this.stack[this.stack.length-1];
		this.stack.pop();
		return data;
	}
}