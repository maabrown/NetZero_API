var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nist_doc_scheme = new Schema({ any: {} });

var nist_doc = mongoose.model('nist_doc', nist_doc_scheme, 'all_data');

module.exports = nist_doc;