/**
 * @fileoverview The set contained some custom rules for BES
 * @author kangkang shang
 */
"use strict";

var requireIndex = require("requireindex");

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



// import processors
module.exports.processors = {

    // add your processors here
};

