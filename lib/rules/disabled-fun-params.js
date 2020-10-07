/**
 * @fileoverview 禁止某些函数使用特定的形参
 * @author kangkang shang
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "禁止某些函数使用特定的形参",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },
  
  create: function (context) {
    let util = require("util");
    /**
     * 获取函数的参数的开始、结束位置
     * @param {node} node AST Node 
     */
    let getCallExpressionsLoc = (node) => {
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
    /**
     * 判断入参列表是否包含特定的key
     * @param {Array} arguments 函数入参列表
     * @param {string} key 特定的key
     */
    function containKey(params, key) {
      if (util.isArray(params)
        && params.length > 0
      ) {
        const index = params.findIndex((item) => {
          return item.type == 'Identifier' && item.name == key;
        });
        return index != -1; // 如果是-1 则不存在
      } else {
        return false;
      }
    }

    return {
      CallExpression: (node) => {
        if (
          node.type == 'CallExpression'
          && node.callee.type == 'Identifier'
          && node.callee.name == 'filter'
          && containKey(node.arguments, 'item')
        ) {
          context.report({
            loc: getCallExpressionsLoc(node),
            node,
            message: '禁止filter方法入参使用filter作为形参',
          });
        }
      }
    };
  }
};
