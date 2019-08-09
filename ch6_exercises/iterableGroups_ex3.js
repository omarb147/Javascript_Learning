/*
Iterable groups
Make the Group class from the previous exercise iterable. 
Refer to the section about the iterator interface earlier in the chapter 
if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created 
by calling the Symbol.iterator method on the array. 
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
1

*/

class Group {
  constructor(...values) {
    this.values = values;
  }

  add(value) {
    if (!this.values.find(val => val === value)) {
      this.values.push(value);
    }
  }

  delete(value) {
    let valueToRemoveIndex = this.values.indexOf(value);
    if (valueToRemoveIndex) {
      this.values.splice(valueToRemoveIndex, 1);
    }
  }

  has(value) {
    return this.values.find(val => val == value) ? true : false;
  }

  static from(values) {
    let group = new Group();
    for (let value of values) {
      group.add(value);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.counter = 0;
  }

  next() {
    if (this.counter === this.group.values.length) return { done: true };

    let value = this.group.values[this.counter];

    this.counter++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
