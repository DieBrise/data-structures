export default class GraphEdge{
	constructor(source, target, weight = 0){
		this.source = source;
		this.target = target;
		this.weight = weight;
	}
}