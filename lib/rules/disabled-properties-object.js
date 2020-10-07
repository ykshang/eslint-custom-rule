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
    let babel = require("@babel/core");
    return {
      CallExpression:(node) => {
        console.log('-----------------------');
        console.log(node.parent.parent.parent);
        babel.transformFromAst(node.parent.parent.parent, '', (err, result) => {
          console.log(result);
          console.log('////////////////');
          console.log(err);
        })
        console.log('22222222222222222222');
        if (
          node.type == 'CallExpression' 
          && node.callee.type == 'MemberExpression'
          && node.callee.object.type == 'CallExpression'
          && node.callee.object.callee.type == 'Identifier'
          && node.callee.object.callee.name == '$'
          && node.callee.property.type == 'Identifier'
          && node.callee.property.name == 'size'
        ) {
          context.report({
            loc: getCallExpressionsLoc(node),
            node,
            message: '禁止使用JQuery的.size()方法，请用.length属性代替',
          });
        }
      }
    };
  }
};
