class HashTable {
  constructor(size = 7) {
    this.datamap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.datamap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.datamap[index]) {
      this.datamap[index] = [];
    }
    this.datamap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.datamap[index]) {
      for (let i = 0; i < this.datamap[index].length; i++) {
        if (this.datamap[index][i][0] === key) {
          return this.datamap[index][i][1];
        }
      }
    }
    return undefined;
  }
  key() {
    let keys = [];
    for (let i = 0; i < this.datamap.length; i++) {
      if (this.datamap[i]) {
        for (let j = 0; j < this.datamap[i].length; j++) {
          keys.push(this.datamap[i][j][0]);
        }
      }
    }
    return keys;
  }
}

let testhash = new HashTable();
testhash.set("drinks", 50);
testhash.set("party", true);
testhash.set("pizza", true);
