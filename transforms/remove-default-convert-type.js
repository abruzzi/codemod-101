module.exports = function(fileInfo, api, options) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root.find(j.CallExpression, {callee: {name: "convertTitle"}}).forEach(path => {
    const args = path.value.arguments;
    const [title, how] = args;

    if(how.object.name === 'ConvertType' && how.property.name === 'LOWER') {
      path.value.arguments = [title];
    }
  })

  return root.toSource(options.printOptions || { quote: "single" });
};

module.exports.parser = 'ts';