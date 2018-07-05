const knexConfig = require('./knexfile');
const dbEnvConfig = (process.env.NODE_ENV === 'prod') ? knexConfig.production : knexConfig.development;
const db = require('knex')(dbEnvConfig);

let getUsers = function(){
    db('users')
    .select('*')
    .then((users)=>{
        console.log(users)
    })
}

getUsers();