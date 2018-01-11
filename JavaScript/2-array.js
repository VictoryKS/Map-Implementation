'use strict';

function Dictionary() {
  let keys = [];
  let values = [];
  let num = 0;
  return {
    set(key, value) {
      keys.push(key);
      values.push(value);
    },
    get(key) {
      const i = keys.indexOf(key);
      return values[i];
    },
    has(key) {
      return keys.includes(key);
    },
    delete(key) {
      const i = keys.indexOf(key);
      keys.splice(i, 1);
      values.splice(i, 1);
    },
    get size() {
      return keys.length;
    },
    keys() {
      return keys;
    },
    clear() {
      keys = [];
      values = [];
    },
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (keys[num]) {
        return { value: keys[num++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}

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
for (let key of cityPopulation) {
  console.log(key, '-', cityPopulation.get(key));
}
