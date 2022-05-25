var char = require("./charCount");

test("should return the counts of characters in a word", () => {
  const result_1 = char.charCount("aaabbc");
  expect(result_1[0][0]).toBe("a");
  expect(result_1[0][1]).toBe(3);
  expect(result_1[1][0]).toBe("b");
  expect(result_1[1][1]).toBe(2);
  expect(result_1[2][0]).toBe("c");
  expect(result_1[2][1]).toBe(1);

  const result_2 = char.charCount("an apple a day will keep the doctor away");
  expect(result_2[0][0]).toBe("a");
  expect(result_2[0][1]).toBe(6);
  expect(result_2[1][0]).toBe("e");
  expect(result_2[1][1]).toBe(4);
  expect(result_2[2][0]).toBe("p");
  expect(result_2[2][1]).toBe(3);
  expect(result_2[3][0]).toBe("l");
  expect(result_2[3][1]).toBe(3);
  expect(result_2[4][0]).toBe("d");
  expect(result_2[4][1]).toBe(2);
  expect(result_2[5][0]).toBe("y");
  expect(result_2[5][1]).toBe(2);
  expect(result_2[6][0]).toBe("w");
  expect(result_2[6][1]).toBe(2);
  expect(result_2[7][0]).toBe("t");
  expect(result_2[7][1]).toBe(2);
  expect(result_2[8][0]).toBe("o");
  expect(result_2[8][1]).toBe(2);
  expect(result_2[9][0]).toBe("n");
  expect(result_2[9][1]).toBe(1);
  expect(result_2[10][0]).toBe("i");
  expect(result_2[10][1]).toBe(1);
  expect(result_2[11][0]).toBe("k");
  expect(result_2[11][1]).toBe(1);
  expect(result_2[12][0]).toBe("h");
  expect(result_2[12][1]).toBe(1);
  expect(result_2[13][0]).toBe("c");
  expect(result_2[13][1]).toBe(1);
  expect(result_2[14][0]).toBe("r");
  expect(result_2[14][1]).toBe(1);
});

