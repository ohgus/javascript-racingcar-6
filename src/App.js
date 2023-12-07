import InputView from "./view/InputView.js";

class App {
  #carnames;
  #table;
  #moveCount;

  async play() {
    this.#carnames = await InputView.getCarName();
    this.#moveCount = await InputView.getMoveCount();
  }
}

export default App;
