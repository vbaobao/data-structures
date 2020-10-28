// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// let nodes = {
//   SFO: ['LAX'],
//   LAX: ['SFO', 'SJC'],
//   SJC: ['LAX'],
// };

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let key in this.nodes) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let val of this.nodes[node]) {
    this.nodes[val] = this.nodes[val].filter(edge => edge !== node);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode] = this.nodes[fromNode].filter(edge => edge !== toNode);
  this.nodes[toNode] = this.nodes[toNode].filter(edge => edge !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addNote() --> O(1)
 .contains() --> O(n)
 .removeNode() --> O(n^2)
 .hasEdge() --> O(1)
 .addEdge() --> O(1)
 .removeEdge() --> O(n^2)???
 .forEachNode() --> O(n)
 */