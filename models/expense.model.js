module.exports = (sequelize, Sequelize) => {
    const expense = sequelize.define("expense", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        item: {
            type: Sequelize.STRING,
            allowNull: false,
            max: 100
        },
        cost: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        month: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING,
            max: 200
        }
    });

    return expense;
};

(async () => {
    await sequelize.sync({ force: true });
    
  })();