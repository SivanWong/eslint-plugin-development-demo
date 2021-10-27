/**
 * @fileoverview no console log
 * @author sivan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no console log",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            errorMsg: "console method {{name}} is forbidden"
        }
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            // give me methods
            'MemberExpression': (node) => {
                const object = node.object;
                const property = node.property;
                if (object.name !== "console") return;
                if (property.name === "log") {
                    context.report({
                        node,
                        // message: "console method {{name}} is forbidden",
                        messageId: "errorMsg",
                        data: {
                            name: property.name
                        }
                    })
                }
            }
        };
    }
};
