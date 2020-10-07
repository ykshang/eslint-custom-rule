/**
 * @fileoverview 禁止某些函数使用特定的形参
 * @author kangkang shang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/disabled-fun-params"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("disabled-fun-params", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "angular.module('uee').filter(item)();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
