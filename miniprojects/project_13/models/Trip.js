const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

/*
trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
traveller_amount: Math.floor(Math.random() * 10) + 1,
traveller_id: randomTravellerId,
location_id: randomLocationId,
*/

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        trip_budget: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'trip',
    },
);

module.exports = Trip;