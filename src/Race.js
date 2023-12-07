import { Random } from "@woowacourse/mission-utils";
import MOVE_RANGE from "./constants/moveRange.js";
import OutputView from "./view/OutputView.js";

class Race {
  #table;
  #moveCount;

  constructor(table, moveCount) {
    this.#table = table;
    this.#moveCount = moveCount;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(MOVE_RANGE.START, MOVE_RANGE.END);
  }

  canMoveCar() {
    const num = this.getRandomNumber();

    if (num >= MOVE_RANGE.MOVE) {
      return true;
    } else {
      return false;
    }
  }

  moveCar() {
    for (let car in this.#table) {
      const flag = this.canMoveCar();

      if (flag) {
        this.#table[car] += "-";
      }
    }
  }

  findWinner(table) {
    const winner = [];
    const max = Math.max(...table);
    const keys = Object.keys(table);

    for (let key of keys) {
      if (table[key] === max) winner.push(key);
    }
    return winner;
  }
}

export default Race;
