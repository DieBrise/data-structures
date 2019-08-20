/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graph/Graph.js":
/*!****************************!*\
  !*** ./src/graph/Graph.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Graph; });\n/* harmony import */ var _GraphVertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphVertex */ \"./src/graph/GraphVertex.js\");\n/* harmony import */ var _GraphEdge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphEdge */ \"./src/graph/GraphEdge.js\");\n\r\n\r\n\r\nclass Graph {\r\n\tconstructor(name = null, isDirected = false, multipleEdges = true, loopsAllowed = false, isMixed = false){\r\n\t\tthis.name = name;\r\n\t\t\r\n\t\tthis.isDirected = isDirected;\r\n\t\tthis.multipleEdges = multipleEdges;\r\n\t\tthis.loopsAllowed = loopsAllowed;\r\n\t\tthis.isMixed = isMixed;\r\n\t\t\r\n\t\tthis.nodes = [];\r\n\t\tthis.edges = [];\r\n\t\tthis.type;\r\n\r\n\t\tif (this.isMixed){\r\n\t\t\tthis.type = \"Mxed\";\r\n\t\t} else if (!this.isDirected && !this.multipleEdges && !this.loopsAllowed){\r\n\t\t\tthis.type = \"Simple\";\r\n\t\t} else if (!this.isDirected && this.multipleEdges && !this.loopsAllowed){\r\n\t\t\tthis.type = \"Multi\";\r\n\t\t} else if (!this.isDirected && this.multipleEdges && this.loopsAllowed){\r\n\t\t\tthis.type = \"Pseudo\";\r\n\t\t} else if (this.isDirected && !this.multipleEdges && !this.loopsAllowed){\r\n\t\t\tthis.type = \"Simple Directed\";\r\n\t\t} else if (this.isDirected && this.multipleEdges && this.loopsAllowed){\r\n\t\t\tthis.type = \"Directed Multi\";\r\n\t\t}\r\n\t}\r\n\r\n\taddNode(GraphVertex){\r\n\t\tthis.nodes.push(GraphVertex);\r\n\t}\r\n\r\n\tfindNode(nodeName){\r\n\t\tlet index = this.nodes.indexOf(s);\r\n\r\n\t\tconsole.log(`Source: ${s}, Index: ${index}`);\t\t\t\r\n\t}\r\n\r\n\taddEdge(GraphEdge){\r\n\t\t\r\n\t\t// let edge = new GraphEdge(source, target, weight);\r\n\t\t// let edgeAlt = {};\r\n\r\n\t\t// edge.from = source;\r\n\t\t// edge.to = target;\r\n\t\t// edge.weight = weight;\r\n\r\n\t\t// let result = this.edges.filter(obj => obj.from === edge.from && obj.to === edge.to);\r\n\t\t// if (result.length > 0){\r\n\t\t// \tconsole.log(`Edge already exists from ${edge.from} to ${edge.to}`);\r\n\t\t// } else {\r\n\t\t// \tthis.edges.push(edge);\r\n\r\n\t\t// \tedgeAlt.from = target;\r\n\t\t// \tedgeAlt.to = source;\r\n\t\t// \tedgeAlt.weight = weight;\r\n\t\t// \tthis.edges.push(edgeAlt);\t\t\t\t\r\n\t\t// }\r\n\t}\r\n\r\n\tprintEdges(){\r\n\t\tconsole.log(`Edges =  ${this.edges.length}`);\r\n\t\tfor (let i = 0; i < this.edges.length; i+=2){\r\n\t\t\tconsole.log(this.edges[i]);\r\n\t\t}\r\n\t}\r\n\r\n\tnoOfEdges(){\r\n\t\tconsole.log(`${this.edges.length/2} edges available`);\r\n\t}\r\n\r\n\tadjacentEdges(source){\r\n\t\tlet result = this.edges.filter(obj => obj.from === source);\r\n\r\n\t\treturn result;\r\n\t}\r\n\r\n\tdijsktra(startNode){\r\n\r\n\t\tif (startNode == null){\r\n\t\t\tconsole.log(\"Please specify a start point!\");\r\n\t\t}\r\n\r\n\t\tthis.distances = [];\r\n\t\tthis.visited = [];\r\n\t\tthis.paths = []; \r\n\t\tthis.queue = new PriorityQueue();\r\n\r\n\t\tthis.isVisited = function(node){\r\n\t\t\tif (this.visited.indexOf(node) >= 0){\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tthis.queue.enqueue(startNode, 0);\r\n\t\tthis.visited.push(startNode);\r\n\r\n\t\tfor (let i = 0; i < this.nodes.length; i++){\r\n\t\t\tlet d = {};\r\n\t\t\tlet p = {};\r\n\t\t\tp.node = this.nodes[i];\r\n\t\t\td.node = this.nodes[i];\r\n\t\t\tif (this.nodes[i] === startNode){\r\n\t\t\t\td.distance = null;\r\n\t\t\t\tp.path = startNode;\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\td.distance = 0;\r\n\t\t\t\tp.path = null;\r\n\t\t\t}\r\n\r\n\t\t\tthis.distances.push(d);\r\n\t\t\tthis.paths.push(p);\r\n\t\t}\r\n\r\n\t\t//console.log(`Queue: ${this.queue.print()}`);\r\n\r\n\t\tlet minElem = this.queue.dequeue();\r\n\r\n\t\twhile(minElem != \"Underflow\"){\r\n\t\t\tlet edges = this.adjacentEdges(minElem.element);\r\n\t\t\t\r\n\t\t\tfor (let j = 0; j < edges.length; j++){\r\n\t\t\t\t//console.log(edges[j]);\r\n\t\t\t\tlet node = edges[j].to;\r\n\t\t\t\tlet index = this.nodes.indexOf(minElem.element);\r\n\r\n\t\t\t\t//console.log(`Node ${minElem.element} is found in Index ${index}`);\r\n\t\t\t\tlet currentDistance = this.distances.filter(obj => obj.node === node)[0].distance;\r\n\t\t\t\tlet parentDistance = this.distances.filter(obj => obj.node === minElem.element)[0].distance;\r\n\t\t\t\tlet edgeWeight = edges[j].weight;\r\n\t\t\t\tlet newDistance = parentDistance + edgeWeight;\r\n\r\n\t\t\t\tif (!this.isVisited(node)){\r\n\t\t\t\t\tthis.visited.push(node);\r\n\t\t\t\t\tthis.queue.enqueue(node, newDistance);\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (currentDistance == 0){\r\n\t\t\t\t\tthis.distances.filter(obj => obj.node === node)[0].distance = newDistance;\r\n\t\t\t\t\tif (minElem.element === startNode){\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${minElem.element}`;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${this.paths[index].path}, ${minElem.element}`;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\t\t\t\telse if (currentDistance > newDistance){\r\n\t\t\t\t\tthis.distances.filter(obj => obj.node === node)[0].distance = newDistance;\r\n\t\t\t\t\tlet currentPath = this.paths[index];\r\n\r\n\t\t\t\t\tif (minElem.element === \"a\"){\r\n\t\t\t\t\t\tconsole.log(`currentPath for a is: ${currentPath}`);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (currentPath === minElem.element){\r\n\t\t\t\t\t\tconsole.log(\"Same\");\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${this.paths[index].path}`;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${this.paths[index].path}, ${minElem.element}`;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tminElem = this.queue.dequeue();\r\n\t\t\t//console.log(`Queue: ${this.queue.print()}`);\r\n\t\t}\r\n\r\n\t\tfor (let k = 0; k < this.nodes.length; k++){\r\n\t\t\t//if (this.){}\r\n\t\t}\r\n\r\n\t\tconsole.log(`Dijsktra Algorithm for graph ${this.name}`);\r\n\t\tconsole.log(`Shortest Distances:`);\r\n\t\tconsole.log(this.distances);\r\n\t\tconsole.log(\"\");\r\n\t\tconsole.log(`Shortest Paths:`);\r\n\t\tconsole.log(this.paths);\r\n\r\n\t\t// for (let j = 0; j < this.out.length; j++){\r\n\r\n\t\t// }\r\n\t}\r\n\r\n}\r\n\r\n// let nav = new IkukuGraph(); //Create new nav\r\n\r\n// nav.addNode('a'); //1st Gate\r\n// nav.addNode('b'); //Church/Mosque\r\n// nav.addNode('c'); //Education\r\n// nav.addNode('d'); //Newest Hall\r\n// nav.addNode('e'); //New Hall\r\n// nav.addNode('f'); //ISL\r\n// nav.addNode('g'); //Health Center\r\n// nav.addNode('h'); //Moremi Car Park\r\n// nav.addNode('i'); //Senate Building\r\n// nav.addNode('j'); //Jaja\r\n// nav.addNode('k'); //Ozolua\r\n// nav.addNode('l'); //Sciences\r\n// nav.addNode('m'); //Library\r\n// nav.addNode('n'); //Highrise\r\n\r\n// nav.addEdge('a', 'b', 2);\r\n// nav.addEdge('a', 'c', 1);\r\n\r\n// nav.addEdge('b', 'e', 1);\r\n// nav.addEdge('b', 'f', 4);\r\n\r\n// nav.addEdge('c', 'd', 1);\r\n\r\n// nav.addEdge('d', 'f', 2);\r\n\r\n// nav.addEdge('e', 'f', 4);\r\n// nav.addEdge('e', 'g', 3);\r\n// nav.addEdge('e', 'h', 2);\r\n// nav.addEdge('e', 'i', 3);\r\n\r\n// nav.addEdge('f', 'g', 1);\r\n// nav.addEdge('f', 'j', 2);\r\n// nav.addEdge('f', 'k', 3);\r\n\r\n// nav.addEdge('g', 'j', 1);\r\n\r\n// nav.addEdge('h', 'i', 2);\r\n// nav.addEdge('h', 'j', 1);\r\n\r\n// nav.addEdge('i', 'j', 3);\r\n// nav.addEdge('i', 'm', 1);\r\n\r\n// nav.addEdge('j', 'k', 2);\r\n// nav.addEdge('j', 'l', 1);\r\n// nav.addEdge('j', 'm', 2);\r\n\r\n// nav.addEdge('k', 'n', 2);\r\n\r\n// nav.addEdge('l', 'm', 2);\r\n\r\n//nav.dijsktra('a');\r\n\r\n// let example = new IkukuGraph();\r\n\r\n// example.addNode('a');\r\n// example.addNode('b');\r\n// example.addNode('c');\r\n// example.addNode('d');\r\n// example.addNode('e');\r\n// example.addNode('z');\r\n\r\n// example.addEdge('a', 'b', 4);\r\n// example.addEdge('a', 'c', 2);\r\n// example.addEdge('b', 'c', 1);\r\n// example.addEdge('b', 'd', 5);\r\n// example.addEdge('c', 'e', 10);\r\n// example.addEdge('c', 'd', 8);\r\n// example.addEdge('e', 'z', 3);\r\n// example.addEdge('d', 'z', 6);\r\n// example.addEdge('d', 'e', 2);\r\n\r\n\r\n// example.dijsktra('a');\r\n\r\n\r\n// let ex1 = new IkukuGraph();\r\n\r\n// ex1.addNode('a');\r\n// ex1.addNode('b');\r\n// ex1.addNode('c');\r\n// ex1.addNode('d');\r\n// ex1.addNode('e');\r\n// ex1.addNode('z');\r\n\r\n// ex1.addEdge('a', 'b', 2);\r\n// ex1.addEdge('a', 'c', 3);\r\n// ex1.addEdge('b', 'e', 2);\r\n// ex1.addEdge('b', 'd', 5);\r\n// ex1.addEdge('c', 'e', 5);\r\n// ex1.addEdge('e', 'z', 4);\r\n// ex1.addEdge('d', 'z', 2);\r\n// ex1.addEdge('d', 'e', 1);\r\n\r\n// ex1.dijsktra('a');\n\n//# sourceURL=webpack:///./src/graph/Graph.js?");

/***/ }),

/***/ "./src/graph/GraphEdge.js":
/*!********************************!*\
  !*** ./src/graph/GraphEdge.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GraphEdge; });\nclass GraphEdge{\r\n\tconstructor(source, target, weight = 0){\r\n\t\tthis.source = source;\r\n\t\tthis.target = target;\r\n\t\tthis.weight = weight;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/graph/GraphEdge.js?");

/***/ }),

/***/ "./src/graph/GraphOld.js":
/*!*******************************!*\
  !*** ./src/graph/GraphOld.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GraphOld; });\n/* harmony import */ var _priority_queue_PriorityQueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../priority-queue/PriorityQueue.js */ \"./src/priority-queue/PriorityQueue.js\");\n\r\n\r\nclass GraphOld{\r\n\tconstructor(name = null){\r\n\t\tthis.name = name;\r\n\t\t\r\n\t\tthis.nodes = [];\r\n\t\tthis.edges = [];\r\n\t}\r\n\r\n\taddNode(name){\r\n\t\tthis.nodes.push(name);\r\n\r\n\t\tlet selfEdge = {};\r\n\t\tselfEdge.to = name;\r\n\t\tselfEdge.weight = 0;\r\n\t}\r\n\t\r\n\tfindNode(s){\r\n\t\tlet index = this.nodes.indexOf(s);\r\n\r\n\t\tconsole.log(`Source: ${s}, Index: ${index}`);\t\t\t\r\n\t}\r\n\r\n\taddEdge(source, target, weight){\r\n\t\tlet edge = {};\r\n\t\tlet edgeAlt = {};\r\n\r\n\t\tedge.from = source;\r\n\t\tedge.to = target;\r\n\t\tedge.weight = weight;\r\n\r\n\t\tlet result = this.edges.filter(obj => obj.from === edge.from && obj.to === edge.to);\r\n\t\tif (result.length > 0){\r\n\t\t\tconsole.log(`Edge already exists from ${edge.from} to ${edge.to}`);\r\n\t\t} else {\r\n\t\t\tthis.edges.push(edge);\r\n\r\n\t\t\tedgeAlt.from = target;\r\n\t\t\tedgeAlt.to = source;\r\n\t\t\tedgeAlt.weight = weight;\r\n\t\t\tthis.edges.push(edgeAlt);\t\t\t\t\r\n\t\t}\r\n\t}\r\n\r\n\tprintEdges(){\r\n\t\tconsole.log(`Edges =  ${this.edges.length}`);\r\n\t\tfor (let i = 0; i < this.edges.length; i+=2){\r\n\t\t\tconsole.log(this.edges[i]);\r\n\t\t}\r\n\t}\r\n\r\n\tnoOfEdges(){\r\n\t\tconsole.log(`${this.edges.length/2} edges available`);\r\n\t}\r\n\r\n\tadjacentEdges(source){\r\n\t\tlet result = this.edges.filter(obj => obj.from === source);\r\n\r\n\t\treturn result;\r\n\t}\r\n\r\n\tdijsktra(startNode){\r\n\r\n\t\tif (startNode == null){\r\n\t\t\tconsole.log(\"Please specify a start point!\");\r\n\t\t}\r\n\r\n\t\tthis.distances = [];\r\n\t\tthis.visited = [];\r\n\t\tthis.paths = []; \r\n\t\tthis.queue = new _priority_queue_PriorityQueue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\t\tthis.isVisited = function(node){\r\n\t\t\tif (this.visited.indexOf(node) >= 0){\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tthis.queue.enqueue(startNode, 0);\r\n\t\tthis.visited.push(startNode);\r\n\r\n\t\tfor (let i = 0; i < this.nodes.length; i++){\r\n\t\t\tlet d = {};\r\n\t\t\tlet p = {};\r\n\t\t\tp.node = this.nodes[i];\r\n\t\t\td.node = this.nodes[i];\r\n\t\t\tif (this.nodes[i] === startNode){\r\n\t\t\t\td.distance = null;\r\n\t\t\t\tp.path = startNode;\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\td.distance = 0;\r\n\t\t\t\tp.path = null;\r\n\t\t\t}\r\n\r\n\t\t\tthis.distances.push(d);\r\n\t\t\tthis.paths.push(p);\r\n\t\t}\r\n\r\n\t\t//console.log(`Queue: ${this.queue.print()}`);\r\n\r\n\t\tlet minElem = this.queue.dequeue();\r\n\r\n\t\twhile(minElem != \"Underflow\"){\r\n\t\t\tlet edges = this.adjacentEdges(minElem.element);\r\n\t\t\t\r\n\t\t\tfor (let j = 0; j < edges.length; j++){\r\n\t\t\t\t//console.log(edges[j]);\r\n\t\t\t\tlet node = edges[j].to;\r\n\t\t\t\tlet index = this.nodes.indexOf(minElem.element);\r\n\r\n\t\t\t\t//console.log(`Node ${minElem.element} is found in Index ${index}`);\r\n\t\t\t\tlet currentDistance = this.distances.filter(obj => obj.node === node)[0].distance;\r\n\t\t\t\tlet parentDistance = this.distances.filter(obj => obj.node === minElem.element)[0].distance;\r\n\t\t\t\tlet edgeWeight = edges[j].weight;\r\n\t\t\t\tlet newDistance = parentDistance + edgeWeight;\r\n\r\n\t\t\t\tif (!this.isVisited(node)){\r\n\t\t\t\t\tthis.visited.push(node);\r\n\t\t\t\t\tthis.queue.enqueue(node, newDistance);\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (currentDistance == 0){\r\n\t\t\t\t\tthis.distances.filter(obj => obj.node === node)[0].distance = newDistance;\r\n\t\t\t\t\tif (minElem.element === startNode){\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${minElem.element}`;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${this.paths[index].path}, ${minElem.element}`;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\t\t\t\telse if (currentDistance > newDistance){\r\n\t\t\t\t\tthis.distances.filter(obj => obj.node === node)[0].distance = newDistance;\r\n\t\t\t\t\tlet currentPath = this.paths[index];\r\n\r\n\t\t\t\t\tif (minElem.element === \"a\"){\r\n\t\t\t\t\t\tconsole.log(`currentPath for a is: ${currentPath}`);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (currentPath === minElem.element){\r\n\t\t\t\t\t\tconsole.log(\"Same\");\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${this.paths[index].path}`;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tthis.paths[this.nodes.indexOf(node)].path = `${this.paths[index].path}, ${minElem.element}`;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tminElem = this.queue.dequeue();\r\n\t\t\t//console.log(`Queue: ${this.queue.print()}`);\r\n\t\t}\r\n\r\n\t\tfor (let k = 0; k < this.nodes.length; k++){\r\n\t\t\t//if (this.){}\r\n\t\t}\r\n\r\n\t\tconsole.log(`Dijsktra Algorithm for graph ${this.name}`);\r\n\t\tconsole.log(`Shortest Distances:`);\r\n\t\tconsole.log(this.distances);\r\n\t\tconsole.log(\"\");\r\n\t\tconsole.log(`Shortest Paths:`);\r\n\t\tconsole.log(this.paths);\r\n\r\n\t\t// for (let j = 0; j < this.out.length; j++){\r\n\r\n\t\t// }\r\n\t}\r\n\r\n}\r\n\r\n// let nav = new IkukuGraph(); //Create new nav\r\n\r\n// nav.addNode('a'); //1st Gate\r\n// nav.addNode('b'); //Church/Mosque\r\n// nav.addNode('c'); //Education\r\n// nav.addNode('d'); //Newest Hall\r\n// nav.addNode('e'); //New Hall\r\n// nav.addNode('f'); //ISL\r\n// nav.addNode('g'); //Health Center\r\n// nav.addNode('h'); //Moremi Car Park\r\n// nav.addNode('i'); //Senate Building\r\n// nav.addNode('j'); //Jaja\r\n// nav.addNode('k'); //Ozolua\r\n// nav.addNode('l'); //Sciences\r\n// nav.addNode('m'); //Library\r\n// nav.addNode('n'); //Highrise\r\n\r\n// nav.addEdge('a', 'b', 2);\r\n// nav.addEdge('a', 'c', 1);\r\n\r\n// nav.addEdge('b', 'e', 1);\r\n// nav.addEdge('b', 'f', 4);\r\n\r\n// nav.addEdge('c', 'd', 1);\r\n\r\n// nav.addEdge('d', 'f', 2);\r\n\r\n// nav.addEdge('e', 'f', 4);\r\n// nav.addEdge('e', 'g', 3);\r\n// nav.addEdge('e', 'h', 2);\r\n// nav.addEdge('e', 'i', 3);\r\n\r\n// nav.addEdge('f', 'g', 1);\r\n// nav.addEdge('f', 'j', 2);\r\n// nav.addEdge('f', 'k', 3);\r\n\r\n// nav.addEdge('g', 'j', 1);\r\n\r\n// nav.addEdge('h', 'i', 2);\r\n// nav.addEdge('h', 'j', 1);\r\n\r\n// nav.addEdge('i', 'j', 3);\r\n// nav.addEdge('i', 'm', 1);\r\n\r\n// nav.addEdge('j', 'k', 2);\r\n// nav.addEdge('j', 'l', 1);\r\n// nav.addEdge('j', 'm', 2);\r\n\r\n// nav.addEdge('k', 'n', 2);\r\n\r\n// nav.addEdge('l', 'm', 2);\r\n\r\n//nav.dijsktra('a');\r\n\r\n// let example = new IkukuGraph();\r\n\r\n// example.addNode('a');\r\n// example.addNode('b');\r\n// example.addNode('c');\r\n// example.addNode('d');\r\n// example.addNode('e');\r\n// example.addNode('z');\r\n\r\n// example.addEdge('a', 'b', 4);\r\n// example.addEdge('a', 'c', 2);\r\n// example.addEdge('b', 'c', 1);\r\n// example.addEdge('b', 'd', 5);\r\n// example.addEdge('c', 'e', 10);\r\n// example.addEdge('c', 'd', 8);\r\n// example.addEdge('e', 'z', 3);\r\n// example.addEdge('d', 'z', 6);\r\n// example.addEdge('d', 'e', 2);\r\n\r\n\r\n// example.dijsktra('a');\r\n\r\n\r\n// let ex1 = new IkukuGraph();\r\n\r\n// ex1.addNode('a');\r\n// ex1.addNode('b');\r\n// ex1.addNode('c');\r\n// ex1.addNode('d');\r\n// ex1.addNode('e');\r\n// ex1.addNode('z');\r\n\r\n// ex1.addEdge('a', 'b', 2);\r\n// ex1.addEdge('a', 'c', 3);\r\n// ex1.addEdge('b', 'e', 2);\r\n// ex1.addEdge('b', 'd', 5);\r\n// ex1.addEdge('c', 'e', 5);\r\n// ex1.addEdge('e', 'z', 4);\r\n// ex1.addEdge('d', 'z', 2);\r\n// ex1.addEdge('d', 'e', 1);\r\n\r\n// ex1.dijsktra('a');\n\n//# sourceURL=webpack:///./src/graph/GraphOld.js?");

/***/ }),

/***/ "./src/graph/GraphVertex.js":
/*!**********************************!*\
  !*** ./src/graph/GraphVertex.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GraphNode; });\nclass GraphNode{\r\n\tconstructor(name){\r\n\t\tthis.name = name;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/graph/GraphVertex.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stack_Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack/Stack.js */ \"./src/stack/Stack.js\");\n/* harmony import */ var _linked_list_LinkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list/LinkedList.js */ \"./src/linked-list/LinkedList.js\");\n/* harmony import */ var _graph_Graph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph/Graph.js */ \"./src/graph/Graph.js\");\n/* harmony import */ var _graph_GraphOld_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph/GraphOld.js */ \"./src/graph/GraphOld.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst nav = new _graph_GraphOld_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Unilag\"); //Create new nav\r\n\r\nnav.addNode('1st Gate'); //1st Gate\r\nnav.addNode('Chapel'); //Church/Mosque\r\nnav.addNode('Faculty of Education'); //Education\r\nnav.addNode('Amina/Kofo/Biobaku'); //Newest Hall\r\nnav.addNode('New Hall'); //New Hall\r\nnav.addNode('ISL/DLI'); //ISL\r\nnav.addNode('Health Center'); //Health Center\r\nnav.addNode('Moremi Car Park'); //Moremi Car Park\r\nnav.addNode('Senate Building'); //Senate Building\r\nnav.addNode('Jaja'); //Jaja\r\nnav.addNode('Ozolua'); //Ozolua\r\nnav.addNode('Faculty of Sciences'); //Sciences\r\nnav.addNode('Library'); //Library\r\nnav.addNode('Highrise'); //Highrise\r\n\r\nnav.addEdge('1st Gate', 'Chapel', 2);\r\nnav.addEdge('1st Gate', 'Faculty of Education', 1);\r\n\r\nnav.addEdge('Chapel', 'New Hall', 1);\r\nnav.addEdge('Chapel', 'ISL/DLI', 4);\r\n\r\nnav.addEdge('Faculty of Education', 'Amina/Kofo/Biobaku', 1);\r\n\r\nnav.addEdge('Amina/Kofo/Biobaku', 'ISL/DLI', 2);\r\n\r\nnav.addEdge('New Hall', 'ISL/DLI', 4);\r\nnav.addEdge('New Hall', 'Health Center', 3);\r\nnav.addEdge('New Hall', 'Moremi Car Park', 2);\r\nnav.addEdge('New Hall', 'Senate Building', 3);\r\n\r\nnav.addEdge('ISL/DLI', 'Health Center', 1);\r\nnav.addEdge('ISL/DLI', 'Jaja', 2);\r\nnav.addEdge('ISL/DLI', 'Ozolua', 3);\r\n\r\nnav.addEdge('Health Center', 'Jaja', 1);\r\n\r\nnav.addEdge('Moremi Car Park', 'Senate Building', 2);\r\nnav.addEdge('Moremi Car Park', 'Jaja', 1);\r\n\r\nnav.addEdge('Senate Building', 'Jaja', 3);\r\nnav.addEdge('Senate Building', 'Library', 1);\r\n\r\nnav.addEdge('Jaja', 'Ozolua', 2);\r\nnav.addEdge('Jaja', 'Faculty of Sciences', 1);\r\nnav.addEdge('Jaja', 'Library', 2);\r\n\r\nnav.addEdge('Ozolua', 'Highrise', 2);\r\n\r\nnav.addEdge('Faculty of Sciences', 'Library', 2);\r\n\r\nnav.dijsktra('1st Gate');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/linked-list/LinkedList.js":
/*!***************************************!*\
  !*** ./src/linked-list/LinkedList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkedList; });\n/* harmony import */ var _LinkedListNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedListNode.js */ \"./src/linked-list/LinkedListNode.js\");\n\r\n\r\nclass LinkedList{\r\n\tconstructor(){\r\n\t\tthis.head = null;\r\n\t}\r\n\r\n\r\n\tsetHead(data){\r\n\t\tthis.head = new _LinkedListNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n\t\treturn this;\r\n\t}\r\n\r\n\tappendNode(data){\r\n\t\tconst node = new _LinkedListNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n\r\n\t\tif (!this.head){\r\n\t\t\tthis.head = new _LinkedListNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tthis.tail.next = node;\r\n\t\tthis.tail = node;\r\n\t\treturn this;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/linked-list/LinkedList.js?");

/***/ }),

/***/ "./src/linked-list/LinkedListNode.js":
/*!*******************************************!*\
  !*** ./src/linked-list/LinkedListNode.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkedListNode; });\nclass LinkedListNode{\r\n\tconstructor(data, next = null){\r\n\t\tthis.data = data;\r\n\t\tthis.next = next;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/linked-list/LinkedListNode.js?");

/***/ }),

/***/ "./src/priority-queue/PriorityQueue.js":
/*!*********************************************!*\
  !*** ./src/priority-queue/PriorityQueue.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PriorityQueue; });\n/* harmony import */ var _PriorityQueueElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriorityQueueElement.js */ \"./src/priority-queue/PriorityQueueElement.js\");\n\r\n\r\nclass PriorityQueue {\r\n\tconstructor(){\r\n\t\tthis.items = [];\r\n\t}\r\n\r\n\tisEmpty(){\r\n\t\treturn this.items.length == 0;\r\n\t}\r\n\r\n\tenqueue(element, priority){\r\n\t\tlet qElement = new _PriorityQueueElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element, priority);\r\n\t\tlet contain = false;\r\n\r\n\t\t//Iterate through entire array to add element at correct location\r\n\t\tfor (let i = 0; i < this.items.length; i++){\r\n\t\t\tif (this.items[i].priority > qElement.priority){\r\n\t\t\t\tthis.items.splice(i, 0, qElement);\r\n\t\t\t\tcontain = true;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t//If element has the highest priority, push to end of queue\r\n\t\tif (!contain){\r\n\t\t\tthis.items.push(qElement);\r\n\t\t}\r\n\t}\r\n\r\n\tdequeue(){\r\n\t\tif (this.isEmpty()){\r\n\t\t\treturn \"Underflow\";\r\n\t\t}\r\n\t\treturn this.items.shift();\r\n\t}\r\n\r\n\tfront(){\r\n\t\tif (this.isEmpty()){\r\n\t\t\treturn \"No elements\";\r\n\t\t}\r\n\t\treturn this.items[0];\r\n\t}\r\n\r\n\trear(){\r\n\t\tif (this.isEmpty()){\r\n\t\t\treturn \"No elements\";\r\n\t\t}\r\n\t\treturn this.items[this.items.length - 1];\r\n\t}\r\n\r\n\r\n\tprint(){\r\n\t\tlet str = \"\";\r\n\t\tfor (let i = 0; i < this.items.length; i++){\r\n\t\t\tstr += this.items[i].element + \" \";\r\n\t\t}\r\n\t\treturn str;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/priority-queue/PriorityQueue.js?");

/***/ }),

/***/ "./src/priority-queue/PriorityQueueElement.js":
/*!****************************************************!*\
  !*** ./src/priority-queue/PriorityQueueElement.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PriorityQueueElement; });\nclass PriorityQueueElement {\r\n\tconstructor(element, priority){\r\n\t\tthis.element = element;\r\n\t\tthis.priority = priority;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/priority-queue/PriorityQueueElement.js?");

/***/ }),

/***/ "./src/stack/Stack.js":
/*!****************************!*\
  !*** ./src/stack/Stack.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stack; });\nclass Stack {\r\n\tconstructor(){\r\n\t\tthis.stack = [];\r\n\t};\r\n\r\n\tpop(data){\r\n\t\tthis.stack.push(data);\r\n\t}\r\n\r\n\tpeep(){\r\n\t\tconsole.log(this.stack[this.stack.length-1]);\r\n\t}\r\n\r\n\tpop(){\r\n\t\tlet data = this.stack[this.stack.length-1];\r\n\t\tthis.stack.pop();\r\n\t\treturn data;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/stack/Stack.js?");

/***/ })

/******/ });