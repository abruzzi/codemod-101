const { template, withParser } = require("jscodeshift");

const tsTemplate = withParser("ts");

// const toUpperCaseFunction = tsTemplate.expression`
//  const abc = "";
// `;

// const toUpperCaseFunction = template(
//   `
//   (input: string) => input.toUpperCase()
// `
// );

//
// const toUpperCaseFunction = template.statement`
//     function toUpperCase(input) {
//         return input.toUpperCase();
//     }`;
//
// const toLowerCaseFunction = template.statement`
//     function toLowerCase(input) {
//         return input.toLowerCase();
//     }`;
//
// const toTitleCaseFunction = template.statement`
//     function toTitleCase(title) {
//         return title
//             .split(/\\s+/)
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ');
//     }`;

module.exports = function (fileInfo, api, options) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const x = j(`(input: string) => input.toUpperCase()`);
  console.log(x[0]);


  root
    .find(j.CallExpression, { callee: { name: "convertTitle" } })
    .forEach((path) => {
      const args = path.value.arguments;
      const [title, how] = args;

      // if (how.object.name === "ConvertType" && how.property.name === "LOWER") {
      //   path.value.arguments = [title, toLowerCaseFunction];
      // }

      if (how.object.name === "ConvertType" && how.property.name === "UPPER") {
        path.value.arguments = [title, toUpperCaseFunction];
      }
      //
      // if (how.object.name === "ConvertType" && how.property.name === "TITLE") {
      //   path.value.arguments = [title, toTitleCaseFunction];
      // }
    });

  return root.toSource(options.printOptions || { quote: "single" });
};

module.exports.parser = "ts";
