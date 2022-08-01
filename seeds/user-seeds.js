const sequelize = require( '../config/connection' );
const { User, Listing } = require( '../models' );

const userdata = [
    {
        username: 'smartcrushing',
        email: 'smartcrushing@gmail.com',
        password: 'password123'
    },
    {
        username: 'departureseamstress',
        email: 'departureseamstress@gmail.com',
        password: 'password123'
    },
    {
        username: 'lettercut',
        email: 'lettercut@gmail.com',
        password: 'password123'
    },
    {
        username: 'unwrittentendon',
        email: 'unwrittentendon@gmail.com',
        password: 'password123'
    },
    {
        username: 'grotesqueliterature',
        email: 'grotesqueliterature@gmail.com',
        password: 'password123'
    },
    {
        username: 'hamsterring',
        email: 'hamsterring@gmail.com',
        password: 'password123'
    },
    {
        username: 'thepaddle',
        email: 'thepaddle@gmail.com',
        password: 'password123'
    },
    {
        username: 'adventurehabitat',
        email: 'adventurehabitat@aol.com.cn',
        password: 'password123'
    },
    {
        username: 'voidrecall',
        email: 'voidrecall@gmail.com',
        password: 'password123'
    },
    {
        username: 'pickycrisp',
        email: 'pickycrisp@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate( userdata, { individualHooks: true } );

module.exports = seedUsers;
