// const index = require("../src/index.js");
import * as Sort from "../src/index";

describe("testtest", () => {
  let subtable = [];
  beforeEach(() => {
    subtable = [
      { date: "2019-05-10" },
      { date: "2019-01-01" },
      { date: "2019-11-10" },
      { date: "2020-07-20" },
      { date: "2019-01-02" }
    ];
  });

  test("test1", () => {
    expect(Sort.subtableAarraySort(subtable).length).toBe(5);
  });

  test("test2", () => {
    expect(Sort.subtableAarraySort2(subtable).length).toBe(5);
    let sorted = Sort.subtableAarraySort2(subtable);
    expect(sorted[0].date).toBe("2020-07-20");
  });
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
