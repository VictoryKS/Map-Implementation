'use strict';

function Dictionary() {
  this.keysArr = [];
  this.values = [];
  this.num = 0;
}

Dictionary.prototype = {
  set(key, value) {
    this.keysArr.push(key);
    this.values.push(value);
  },
  get(key) {
    const i = this.keysArr.indexOf(key);
    return this.values[i];
  },
  has(key) {
    return this.keysArr.includes(key);
  },
  delete(key) {
    const i = this.keysArr.indexOf(key);
    this.keysArr.splice(i, 1);
    this.values.splice(i, 1);
  },
  get size() {
    return this.keysArr.length;
  },
  keys() {
    return this.keysArr;
  },
  clear() {
    this.keysArr = [];
    this.values = [];
  },
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.keysArr[this.num]) {
      return { value: this.keysArr[this.num++], done: false };
    } else {
      return { done: true };
    }
  }
};

// Usage

const cityPopulation = new Dictionary();

cityPopulation.set('Shanghai', 24256800);
cityPopulation.set('Beijing',  21516000);
cityPopulation.set('Delhi',    16787941);
cityPopulation.set('Lagos',    16060303);

cityPopulation.delete('Shanghai');

if (cityPopulation.has('Beijing')) {
  console.log('Beijing:', cityPopulation.get('Beijing'));
}

if (!cityPopulation.has('Shanghai')) {
  console.log('no data for Shanghai');
}

console.log('size:', cityPopulation.size);
console.log('keys:', cityPopulation.keys());

console.log('Iterable:');
for (const key of cityPopulation) {
  console.log(key, '-', cityPopulation.get(key));
}
