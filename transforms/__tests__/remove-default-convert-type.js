jest.autoMockOff();

const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;
const transform = require('../remove-default-convert-type');

describe('Remove convert type when it is lower case', () => {
  defineInlineTest(transform, {},
    `
    const title = "Hello darkness, my old friend";
    convertTitle(title, ConvertType.UPPER);
    `,
    `
    const title = "Hello darkness, my old friend";
    convertTitle(title, ConvertType.UPPER);
    `,
    'Do not change when it calls upper case'
  );

  defineInlineTest(transform, {},
    `
    const title = "Hello darkness, my old friend";
    convertTitle(title, ConvertType.LOWER);
    `,
    `
    const title = "Hello darkness, my old friend";
    convertTitle(title);
    `,
    'remove the second parameter when it calls with lowercase'
  );
});