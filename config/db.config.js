// const sequelize = new Sequelize('node-collection', 'root', 'root', {
//     dialect: 'mysql',
//     host: 'localhost',
    
//   });


  module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "alliesbussinesshub_v1",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };