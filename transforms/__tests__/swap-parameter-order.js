jest.autoMockOff();

const defineInlineTest = require("jscodeshift/dist/testUtils").defineInlineTest;
const transform = require("../swap-parameter-order");

describe("Change convertTitle function signature", () => {
  defineInlineTest(
    transform,
    {},
    `convertTitle(ConvertType.LOWER, "Hello darkness, my old friend");`,
    `convertTitle("Hello darkness, my old friend", ConvertType.LOWER);`,
    "Change function signature - lower case"
  );

  defineInlineTest(
    transform,
    {},
    `convertTitle(ConvertType.UPPER, "Hello darkness, my old friend");`,
    `convertTitle("Hello darkness, my old friend", ConvertType.UPPER);`,
    "Change function signature - upper case"
  );

  defineInlineTest(
    transform,
    {},
    `
    const title = "Hello darkness, my old friend";
    convertTitle(ConvertType.UPPER, title);
    `,
    `
    const title = "Hello darkness, my old friend";
    convertTitle(title, ConvertType.UPPER);
    `,
    "Change function signature - variable"
  );
});
