import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";
import Validator from "../utils/validator.js";

class InputView {
  static async readCarName() {
    const input = await Console.readLineAsync(MESSAGE.READ.CAR_NAME);
    return input;
  }

  static async getCarName() {
    try {
      const input = await this.readCarName();
      Validator.validateCarName(input);
      return input.split(",");
    } catch (e) {
      Console.print(e.message);
      return await this.getCarName();
    }
  }

  static async readMoveCount() {
    const input = await Console.readLineAsync(MESSAGE.READ.MOVE_COUNT);
    return input;
  }

  static async getMoveCount() {
    try {
      const input = await this.readMoveCount();
      Validator.validateMoveCount(input);
      return Number(input);
    } catch (e) {
      Console.print(e.message);
      return await this.getMoveCount();
    }
  }
}

export default InputView;
