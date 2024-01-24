import merge from "./merge";

describe("merge function", () => {
  it("should merge two arrays", () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    const result = merge([], [2, 4, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  it("should handle arrays with duplicate elements", () => {
    const result = merge([1, 3, 5], [2, 3, 5, 6]);
    expect(result).toEqual([1, 2, 3, 3, 5, 5, 6]);
  });

  it("should handle arrays of different lengths", () => {
    const result = merge([1, 3, 5], [2, 4, 6, 8, 10]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
  });

  it("should handle empty arrays", () => {
    const result = merge([], []);
    expect(result).toEqual([]);
  });
});
