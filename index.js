const isObject = require("@is-(unknown)/is-object")
const isNull = require("@is-(unknown)/is-null")
const and = require("es-logical-and-operator")
const not = require("es-logical-not-operator")

function isNonNullObject(value) {
  return and(isObject(value), not(isNull(value)))
}

module.exports = isNonNullObject