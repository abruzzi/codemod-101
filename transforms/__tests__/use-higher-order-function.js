jest.autoMockOff();

const defineInlineTest = require("jscodeshift/dist/testUtils").defineInlineTest;
const transform = require("../use-higher-order-function");

describe("Use Higher Order Function ", () => {
  defineInlineTest(
    transform,
    {},
    `
    convertTitle(title, ConvertType.UPPER);
    `,
    `
    convertTitle(title, input => input.toUpperCase());
    `,
    "Change function signature - lower case"
  );
});