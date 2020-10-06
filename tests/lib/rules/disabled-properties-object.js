/**
 * @description The rule for jQuery to disabled some prototype method/properties.
 * @author kangkang shang
 */

"use strict";

// Rule Definition
module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "The rule for jQuery to disabled some prototype method/properties.",
        },
        messages: {
            restrictedMessage: "'{{propertyName}}' is restricted from being used.{{message}}",
        }
    },

    create(context) {
        console.log(context);

        return {};
    }
};
