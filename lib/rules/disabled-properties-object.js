/**
 * @fileoverview The rule to disabled some prototype peoperties or method for some object
 * @author kangkang shang
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "The rule to disabled some prototype peoperties or method for some object",
      category: "Fill me in",
      recommended: false
    }
  },

  create: function (context) {
    console.log(context);
    /**
     * 获取函数的参数的开始、结束位置
     * @param {node} node AST Node 
     */
    function getCallExpressionsLoc(node) {
      const loc = node.loc;
      return {
        start: {
          line: loc.start.line,
          column: loc.start.column
        },
        end: {
          line: loc.end.line,
          column: loc.end.column
        },
      };
    };
    return {
      CallExpression:(node) => {
        console.log('------------------------------------');
        console.log(node);
        if (
          node.type == 'CallExpression' 
          && node.callee.type == 'MemberExpression'
          && node.callee.object.type == 'CallExpression'
          && node.callee.object.callee.type == 'Identifier'
          && node.callee.object.callee.name == '$'
          && node.callee.property.type == 'Identifier'
          && node.callee.property.name == 'size'
        ) {
          console.log('////////////////');
          console.log(node.callee.object.callee.type);
          context.report({
            loc: getCallExpressionsLoc(node),
            node,
            message: '禁止使用size方法，请用.length属性代替',
          });
        }
      }
    };
  }
};
