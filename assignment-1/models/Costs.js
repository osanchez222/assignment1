var mongoose = require('mongoose');

var CostsSchema = new mongoose.Schema({
  STATE: String,
  AVERAGE_COST: Number,
},
{
    collection: 'healthcare_costs_collection'
});

mongoose.model('Costs', CostsSchema);