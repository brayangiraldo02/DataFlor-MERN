import Sequelize from 'sequelize';

// Conexión a la base de datos DataFlor en PostgreSQL hecha con sequelize
const sequelize = new Sequelize("dataflor", "root", "123456789", {
  host: "localhost",
  dialect: 'mysql',
  port: 3306,
});

// Prueba de conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('The connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.log(dbConfig);
    console.log('Unable to connect to the database:', err);
  });

export default sequelize;