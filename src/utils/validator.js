import ERROR from "../constants/error.js";
import NAME from "../constants/input.js";

class Validator {
  static validateCarName(input) {
    const names = input.split(",");

    if (names.length !== new Set(names).size) {
      throw new Error(ERROR.DUPLICATED);
    }

    for (let name of names) {
      if (!ERROR.REGEX.test(name)) {
        throw new Error(ERROR.NOT_ALLOWED);
      } else if (name.length > NAME.LENGTH) {
        throw new Error(ERROR.LENGTH);
      }
    }
  }

  static validateMoveCount(input) {
    const num = Number(input);

    if (!ERROR.NUM_REGEX.test(num)) {
      throw new Error(ERROR.NOT_ALLOWED_NUM);
    }
  }
}

export default Validator;
