import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";

class OutputView {
  static printExecutionResult() {
    Console.print(MESSAGE.PRINT.EXECUTION_RESULT);
  }

  static printIntermediateResults(table) {
    for (let car in table) {
      Console.print(`${car} : ${table[car]}`);
    }
    Console.print("");
  }

  static printWinner(winner) {
    if (winner.length === 1) {
      Console.print(`${MESSAGE.PRINT.WINNER}${winner[0]}`);
    } else {
      Console.print(`${MESSAGE.PRINT.WINNER}${winner.join(", ")}`);
    }
  }
}

export default OutputView;
