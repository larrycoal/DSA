class Graph {
  constructor() {
    this.adjencencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjencencyList[vertex]) {
      this.adjencencyList[vertex] = [];
      return true;
    }
    return false;
  }
  addEdge(vertex1, vertex2) {
    if (this.adjencencyList[vertex1] && this.adjencencyList[vertex2]) {
      this.adjencencyList[vertex1].push(vertex2);
      this.adjencencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjencencyList[vertex1] && this.adjencencyList[vertex2]) {
      this.adjencencyList[vertex1] = this.adjencencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjencencyList[vertex2] = this.adjencencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertex) {
    if (!this.adjencencyList[vertex]) return undefined;

    while (this.adjencencyList[vertex].length) {
      let temp = this.adjencencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjencencyList[vertex];
    return this;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("D", "B");
myGraph.addEdge("C", "D");
myGraph.addEdge("A", "D");
