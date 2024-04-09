'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    processInclude(require('./product/base'));
    processInclude(require('./product/afterAddToCartPLP'));
});