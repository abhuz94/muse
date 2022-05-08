import { Low, JSONFile } from 'lowdb';
import path from 'path';

class DB {
  #db = null;

  #file = path.join(__dirname, 'db.json');

  constructor() {
    this.#db = new Low(new JSONFile(this.#file));
    this.#db.data ||= { carts: new Map(), wishlist: new Map() };
  }

  getInstance() {
    return this.#db;
  }
}

export default new DB();
