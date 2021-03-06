function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 5;
  //this.MIN_SIZE = 0;
}

QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl == 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};


QueueDataStructure.prototype.enqueue = function (x) {
  this.queueControl.push(x);
  this.queueControl.reverse();
  if (this.queueControl.length > this.MAX_SIZE) {
    return "Queue Overflow";
  } else {
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function () {
  if (this.queueControl.length == 0) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
};