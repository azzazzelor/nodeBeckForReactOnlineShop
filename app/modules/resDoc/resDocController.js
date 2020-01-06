const fs = require("fs");
  
exports.sendDoc = function(req, res, next){
   res.sendFile( __dirname + "/data/" + "products.json" );

}
