var Sequelize = require('sequelize');
var sequelize = new Sequelize('database','root','root',{
   'dialact':'sqlite'
});

var Todo = sequelize.define('todo',{
    description:{
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            len:[1,250]
        }
    },
    completed:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
});

sequelize.sync().then(function (){
    console.log('Everything is synced');
    
    Todo.create({
        description:"Take out trash"
    }).then(function (todo) {
        console.log('Finished');
        console.log(todo)
    }).catch(function (e) {
        console.log(e)
    })
});

