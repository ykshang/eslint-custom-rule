/**
 * @fileoverview The rule to disabled some prototype peoperties or method for some object
 * @author kangkang shang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/disabled-properties-object"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("disabled-properties-object", rule, {

    valid: [
       "a(1, 3, 4, 5)"
    ],

    invalid: [
        {
            code: "$(\"111\").size()",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
