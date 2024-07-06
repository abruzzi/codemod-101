import { convertTitle } from "../convert-title";
import { ConvertType } from "../types";

describe("convert title", () => {
  it("convert to uppercase", () => {
    const result = convertTitle(ConvertType.UPPER, "hello world");
    expect(result).toEqual("HELLO WORLD");
  });

  it("convert to lowercase", () => {
    const result = convertTitle(ConvertType.LOWER, "HELLO WORLD");
    expect(result).toEqual("hello world");
  });

  it("convert to title", () => {
    const result = convertTitle(ConvertType.TITLE, "hello world");
    expect(result).toEqual("Hello World");
  });
});