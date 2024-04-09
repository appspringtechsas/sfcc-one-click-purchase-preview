'use strict'

var server = require('server')
var oneClickPurchase = require('*/cartridge/scripts/middleware/oneClickPurchase')

server.extend(module.superModule)

server.append('Show', oneClickPurchase.oneClickPurchaseButtonData)

module.exports = server.exports()