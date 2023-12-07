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
}

export default OutputView;
