import { Low, JSONFile } from 'lowdb';
import path from 'path';
import _get from 'lodash/get';
import _has from 'lodash/has';
import _omit from 'lodash/omit';
import _set from 'lodash/set';

class DB {
  #db = null;

  #file = path.join(__dirname, 'db.json');

  constructor() {
    this.#db = new Low(new JSONFile(this.#file));

    this.#init();
  }

  insert(key, value) {
    if (_has(this.#db.data, key)) {
      throw new Error('duplicate entry');
    }

    _set(this.#db.data, key, value);

    return this.write();
  }

  upsert(key, value) {
    const product = _get(this.#db.data, key) || {};

    _set(this.#db.data, key, { ...product, ...value });

    return this.write();
  }

  delete(key) {
    if (_has(this.#db.data, key)) {
      this.#db.data = _omit(this.#db.data, [key]);
    }

    return this.write();
  }

  get(key) {
    const value = _get(this.#db.data, key);

    return value === undefined ? null : value;
  }

  read() {
    return this.#db.read();
  }

  write() {
    return this.#db.write();
  }

  getBucket(bucket) {
    return this.#db.data[bucket];
  }

  async #init() {
    await this.read();

    this.#db.data ||= { carts: {}, wishlists: {} };
  }
}

export default new DB();
