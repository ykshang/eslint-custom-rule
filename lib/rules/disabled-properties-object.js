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
    function getFunctionParamsLoc(node) {
      console.log("---------------------------");
      const paramsLength = node.params.length;
      return {
        start: node.params[0].loc.start,
        end: node.params[paramsLength - 1].loc.end,
      };
    };

    return {
      FunctionDeclaration: (node) => {
        console.log("-------node--------");
        console.log(node);
        console.log("-------node-111-------");
        if (node.params.length > 3) {
          context.report({
            loc: getFunctionParamsLoc(node),
            node,
            message: "参数最多不能超过3个",
          });
        }
      },
    };
  }
};
