export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  goForward() {
    this.location++;
  }
}
