import InputView from "./view/InputView.js";
import setTabe from "./utils/tableSetter.js";
import Race from "./Race.js";

class App {
  #carnames;
  #table;
  #moveCount;

  async play() {
    this.#carnames = await InputView.getCarName();
    this.#moveCount = await InputView.getMoveCount();
    this.#table = setTabe(this.#carnames);
    const race = new Race(this.#table, this.#moveCount);
    race.raceStart();
  }
}

export default App;
