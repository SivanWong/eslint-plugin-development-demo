/**
 * @fileoverview eslint plugin development demo
 * @author sivan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
    rules: {
      'no-console-log': require('./rules/no-console-log')
    }
    // configs: {
    //   myConfig: {
    //     plugins: ["demo"],
    //     rules: {
    //       "demo/no-console-log": "error"
    //     }
    //   }
    // }
};
