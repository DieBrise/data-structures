import LinkedListNode from './LinkedListNode.js';

export default class LinkedList{
	constructor(){
		this.head = null;
	}


	setHead(data){
		this.head = new LinkedListNode(data);
		return this;
	}

	appendNode(data){
		const node = new LinkedListNode(data);

		if (!this.head){
			this.head = new LinkedListNode(data);
			return this;
		}

		this.tail.next = node;
		this.tail = node;
		return this;
	}
}