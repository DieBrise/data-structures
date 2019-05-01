import PriorityQueueElement from './PriorityQueueElement.js';

export default class PriorityQueue {
	constructor(){
		this.items = [];
	}

	isEmpty(){
		return this.items.length == 0;
	}

	enqueue(element, priority){
		let qElement = new PriorityQueueElement(element, priority);
		let contain = false;

		//Iterate through entire array to add element at correct location
		for (let i = 0; i < this.items.length; i++){
			if (this.items[i].priority > qElement.priority){
				this.items.splice(i, 0, qElement);
				contain = true;
				break;
			}
		}

		//If element has the highest priority, push to end of queue
		if (!contain){
			this.items.push(qElement);
		}
	}

	dequeue(){
		if (this.isEmpty()){
			return "Underflow";
		}
		return this.items.shift();
	}

	front(){
		if (this.isEmpty()){
			return "No elements";
		}
		return this.items[0];
	}

	rear(){
		if (this.isEmpty()){
			return "No elements";
		}
		return this.items[this.items.length - 1];
	}


	print(){
		let str = "";
		for (let i = 0; i < this.items.length; i++){
			str += this.items[i].element + " ";
		}
		return str;
	}
}