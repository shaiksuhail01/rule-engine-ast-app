function evaluateRule(ast, data) {
  try {
    if (ast.type === 'operand') {
      const [key, operator, value] = ast.value.split(' ');
      const userData = data[key];

      if (userData === undefined) {
        throw new Error(`Data key ${key} not found in input data`);
      }

      switch (operator) {
        case '>':
          return userData > parseFloat(value.replace(/\'|\"/g, ''));
        case '<':
          return userData < parseFloat(value.replace(/\'|\"/g, ''));
        case '=':
          return userData === value.replace(/\'|\"/g, '');
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
    } else if (ast.type === 'operator') {
      const leftResult = evaluateRule(ast.left, data);
      const rightResult = evaluateRule(ast.right, data);
      switch (ast.value) {
        case 'AND':
          return leftResult && rightResult;
        case 'OR':
          return leftResult || rightResult;
        default:
          throw new Error(`Unknown operator: ${ast.value}`);
      }
    } else {
      throw new Error(`Unknown node type: ${ast.type}`);
    }
  } catch (error) {
    console.error('Error evaluating rule:', error.message);
    throw error; // Re-throw the error to be handled by the caller
  }
}

module.exports = evaluateRule;
