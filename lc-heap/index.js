const { Heap, MaxHeap, MinHeap } = require("./src/heap");
const {
    PriorityQueue,
    MaxPriorityQueue,
    MinPriorityQueue,
} = require("./src/priorityQueue");

// exports.Heap = Heap;
// exports.MinHeap = MinHeap;
// exports.MaxHeap = MaxHeap;

module.exports = {
    MinPriorityQueue,
    MaxPriorityQueue,
    PriorityQueue,
    Heap,
    MinHeap,
    MaxHeap,
};
