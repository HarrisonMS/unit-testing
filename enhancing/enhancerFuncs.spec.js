const { repair, succeed, fail, get } = require("./enhancer");

describe("repair() method", () => {
  const item = { durability: 0 };
  const expected = { durability: 100 };
  const test = repair(item);
  it("returns a new item", () => {
    expect(test).not.toBe(expected);
  });
  it("new item has durability 100.", () => {
    expect(test).toEqual(expected);
  });
});

describe("succeed() method", () => {
  it("increases item.enhancement by value of 1", () => {
    const item = { enhancement: 2 };
    const expected = { enhancement: 3 };
    const test1 = succeed(item);
    expect(test1).toEqual(expected);
  });
  it("if enhancement is lvl 20 do not change lvl", () => {
    const item = { enhancement: 18 };
    const expected = { enhancement: 19 };
    const test1 = succeed(item);
    expect(test1).toEqual(expected);
    const item2 = { enhancement: 20 };
    const expected2 = { enhancement: 20 };
    const test2 = succeed(item2);
    expect(test2).toEqual(expected2);
  });
  it("does not change item.durability", () => {
    const item = { enhancement: 0, durability: 100 };
    const expected = { enhancement: 1, durability: 100 };
    const test1 = succeed(item);
    expect(test1).toEqual(expected);
  });
});

describe("fail() method", () => {
  it(" if item.enhancement is less than 15 durabiltity decreased by 5", () => {
    const item1 = { enhancement: 10, durability: 5 };
    const expected1 = { enhancement: 10, durability: 0 };
    const test1 = fail(item1);
    expect(test1).toEqual(expected1);
    const item2 = { enhancement: 14, durability: 10 };
    const expected2 = { enhancement: 14, durability: 5 };
    const test2 = fail(item2);
    expect(test2).toEqual(expected2);
  });
  it(" if item.enhancement is 15 or more durabiltity decreased by 10", () => {
    const item1 = { enhancement: 15, durability: 15 };
    const expected1 = { enhancement: 15, durability: 5 };
    const test1 = fail(item1);
    expect(test1).toEqual(expected1);
  });
  it(" If the items enhancement level is greater than 16, the enhancement level decreases by 1", () => {
    const item1 = { enhancement: 17, durability: 15 };
    const expected1 = { enhancement: 16, durability: 5 };
    const test1 = fail(item1);
    expect(test1).toEqual(expected1);
    const item2 = { enhancement: 19, durability: 10 };
    const expected2 = { enhancement: 18, durability: 0 };
    const test2 = fail(item2);
    expect(test2).toEqual(expected2);
  });
});

describe("get() method", () => {
  it("returns item with enhancement lvl prepending name inside [] with again a + sign prepending the level if the enhancements lvl is not zero", () => {
    const item = {
      name: "daggers",
      durability: 0,
      enhancement: 5,
    };
    get(item);
    expect(item.name).toBe("[+5] daggers");
  });
});
