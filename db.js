var Sequelize = require('sequelize');
var sequelize = new Sequelize('database','root','root',{
    'dialact':'sqlite'
});

var db={};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequalize = Sequelize;

module.exports = db;
