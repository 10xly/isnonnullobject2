const { TYPE } = require('@extremejs/utils')
const isNull = require('is-null')
const isUnnull = require('is-unnull')
const not = require('not')

module.exports = function isNonNullObject(value) {
  return typeof value === TYPE.OBJECT && (isUnnull(value) && not(() => isNull(value))())
}
