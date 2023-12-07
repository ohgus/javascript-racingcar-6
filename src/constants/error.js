const ERROR = Object.freeze({
  REGEX: /^[a-zA-Z0-9]+$/,
  NUM_REGEX: /^[1-9]\d*$/,
  LENGTH: "[ERROR] 이름은 5자 이내로 입력해 주세요.",
  NOT_ALLOWED: "[ERROR] 특수문자 및 공백은 포함할 수 없습니다.",
  DUPLICATED: "[ERROR] 중복된 이름은 입력할 수 없습니다.",
  NOT_ALLOWED_NUM:
    "[ERROR] 입력이 올바른 숫자 형식이 아닙니다. 1이상의 숫자만 입력해 주세요.",
});

export default ERROR;
