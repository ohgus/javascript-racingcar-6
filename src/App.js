import InputView from "./view/InputView.js";

class App {
  #carnames;
  #table;
  #moveCount;

  async play() {
    this.#carnames = await InputView.getCarName();
  }
}

export default App;
