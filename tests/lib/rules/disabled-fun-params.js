/**
 * @fileoverview 禁止某些函数使用特定的形参
 * @author kangkang shang
 */
"use strict";
var rule = require("../../../lib/rules/disabled-fun-params"),
RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
ruleTester.run("disabled-fun-params", rule, {
  valid: [
    "filter(item1);",
  ],
  invalid: [
    {
      code: "filter(item);",
      errors: [{
        message: "Fill me in.",
        type: "Me too"
      }]
    }
  ]
});
