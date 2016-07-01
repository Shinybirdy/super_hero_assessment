var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var superPeopleSchema = new Schema({
  alias:String,
  fName:String,
  lName: String,
  city: String,
  power_name:{
    type: String,
    allowedValues: ['Accelerated Healing','Animal Affinity','Flight','Heat Vision','Invisibility','Power Blast','Super Speed','Super Strength']
    }
  });

var superPeopleExport = mongoose.model( 'superPeopleExport', superPeopleSchema  );
module.exports = superPeopleExport;
