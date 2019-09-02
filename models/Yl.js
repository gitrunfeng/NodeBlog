var mongoose = require('mongoose');
var ylSchema = require('../schemas/yl');

module.exports = mongoose.model('Yl', ylSchema)