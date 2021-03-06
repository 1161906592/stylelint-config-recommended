'use strict'

const selectorPattern = "^([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*(_{2}[a-z0-9]+)*$"

module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true, 
      {
        ignorePseudoClasses: ["global"]
      }
    ],
    "selector-class-pattern": [selectorPattern, {
      message: "Expected class selector to be kebab-case"
    }],
    "selector-id-pattern": [selectorPattern, {
      message: "Expected id selector to be kebab-case"
    }]
  }
}
