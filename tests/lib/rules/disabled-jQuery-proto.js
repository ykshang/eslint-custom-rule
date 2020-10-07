/**
 * @fileoverview The rule to disabled some prototype peoperties or method for some object
 * @author kangkang shang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/disabled-jQuery-proto"),

  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("disabled-jQuery-proto", rule, {

  valid: [
    `$('1').length`
  ],

  invalid: [
    {
      code: "$('111').size()",
      errors: [{
        message: "错误写法1"
      }]
    }, {
      code: "$('111' + xx).size()",
      errors: [{
        message: "错误写法2"
      }]
    }, {
      code: "1 == $('111' + xx).size()",
      errors: [{
        message: "错误写法3"
      }]
    }, {
      code: "$('111' + xx).size() == 1",
      errors: [{
        message: "错误写法4"
      }]
    }, {
      code: "aa == $('111' + xx).size()",
      errors: [{
        message: "错误写法5"
      }]
    }, {
      code: "$('111').size() == a",
      errors: [{
        message: "错误写法6"
      }]
    }
  ]
});
