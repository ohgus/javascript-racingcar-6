import { Random } from "@woowacourse/mission-utils";
import MOVE_RANGE from "./constants/moveRange.js";

class Race {
  #table;
  #moveCount;

  constructor(table, moveCount) {
    this.#table = table;
    this.#moveCount = moveCount;
  }

  getRandomNumber() {
    Random.pickNumberInRange(MOVE_RANGE.START, MOVE_RANGE.END);
  }
}
