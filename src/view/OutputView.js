import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printIntermediateResults(table) {
    for (let car in table) {
      Console.print(`${car} : ${table[car]}`);
    }
    Console.print("");
  }
}

export default OutputView;
