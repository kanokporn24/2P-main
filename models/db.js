const {sequalize} = require("sequalize");
const dbConfig = require("../config/dbconfig");

//create sequalize instance
const  sequalize = new Sequalize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host:dbConfig.host,
    dialect:"mysql"
})

//
async function testConection(){
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

testConection();
module