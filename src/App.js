import InputView from "./view/InputView.js";
import setTabe from "./utils/tableSetter.js";

class App {
  #carnames;
  #table;
  #moveCount;

  async play() {
    this.#carnames = await InputView.getCarName();
    this.#moveCount = await InputView.getMoveCount();
    this.#table = setTabe(this.#carnames);
  }
}

export default App;
