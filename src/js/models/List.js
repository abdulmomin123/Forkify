import uniqid from "uniqid";

export class List {
  constructor() {
    this.items = [];
  }

  addItem(count, unit, ingredient) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ingredient,
    };
  }

  deleteItem(id) {
    const index = this.items.findIndex((el) => el.id === id);

    this.items.splice(index, 1);
  }

  updateCount(id, newCount) {
    this.items.find((el) => el.id === id).count = newCount;
  }
}