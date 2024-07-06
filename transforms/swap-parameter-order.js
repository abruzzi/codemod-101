module.exports = function(fileInfo, api, options) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root.find(j.CallExpression, {callee: {name: "convertTitle"}}).forEach(path => {
    path.value.arguments = path.value.arguments.reverse();
  })

  return root.toSource(options.printOptions || { quote: "single" });
};

module.exports.parser = 'ts';