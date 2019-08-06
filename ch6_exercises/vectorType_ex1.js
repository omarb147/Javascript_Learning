/*
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), 
which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector 
that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

// Your code here.

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(matrix) {
    this.x += matrix.x;
    this.y += matrix.y;
    return this.toString();
  }

  minus(matrix) {
    this.x -= matrix.x;
    this.y -= matrix.y;
    return this.toString();
  }

  get length() {
    return Math.sqrt((this.x - 0) ** 2 + (this.y - 0) ** 2);
  }

  toString() {
    return `Vec{x:${this.x}, y:${this.y}}`;
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
