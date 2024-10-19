const createRule = require('./createAST.js');

function combineRule(rules) {
  const freqMap = {};
  for (const rule of rules) {
    const ast = createRule(rule);
    traverseAST(ast, (node) => {
      if (node.type === 'operator') {
        freqMap[node.value] = (freqMap[node.value] || 0) + 1;
      }
    });
  }

  const sortedOperators = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

  let root = null;
  for (const rule of rules) {
    const ast = createRule(rule);
    if (!root) {
      root = ast;
    } else {
      root = combineASTs(root, ast, sortedOperators[0]);
    }
  }

  return root;
}

function combineASTs(left, right, operator) {
  return {
    type: 'operator',
    value: operator,
    left,
    right
  };
}

function traverseAST(ast, callback) {
  callback(ast);
  if (ast.left) {
    traverseAST(ast.left, callback);
  }
  if (ast.right) {
    traverseAST(ast.right, callback);
  }
}

module.exports = combineRule;
