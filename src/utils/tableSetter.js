function setTabe(cars) {
  const table = {};
  for (let car of cars) {
    table[car] = "";
  }
  return table;
}

export default setTabe;
