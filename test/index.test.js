// const index = require("../src/index.js");
import * as Sort from "../src/index";

describe("test sort1", () => {
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

  test("test1-1", () => {
    expect(Sort.subtableAarraySort(subtable).length).toBe(5);
  });
});

describe("test sort2", () => {
  let subtable = [];
  let sorted1 = [];
  let sorted2 = [];
  beforeEach(() => {
    subtable = [
      { date: "2019-05-10" },
      { date: "2019-01-01" },
      { date: "2019-11-10" },
      { date: "2020-07-20" },
      { date: "2019-01-02" }
    ];
    sorted1 = Sort.subtableAarraySort(subtable);
    sorted2 = Sort.subtableAarraySort2(subtable);
  });

  test("test2-1", () => {
    expect(sorted1[0].date).toBe("2020-07-20");
  });

  test("test2-2", () => {
    expect(sorted2[0].date).toBe("2020-07-20");
  });
});

describe("test3 max1", () => {
  let subtable = [];
  let dateMax;
  beforeEach(() => {
    subtable = [
      { date: "2019-05-10" },
      { date: "2019-01-01" },
      { date: "2019-11-10" },
      { date: "2020-07-20" },
      { date: "2019-01-02" }
    ];
    dateMax = new Date(subtable[3].date);
    console.log(dateMax);
  });

  test("test3-1", () => {
    expect(Sort.subtableMaxDate(subtable).toLocaleDateString()).toBe(
      dateMax.toLocaleDateString()
    );
  });
  test("test3-2", () => {
    expect(Sort.subtableMaxDate2(subtable).toLocaleDateString()).toBe(
      dateMax.toLocaleDateString()
    );
  });
});

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });
