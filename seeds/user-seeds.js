const sequelize = require( '../config/connection' );
const { User, Listing } = require( '../models' );

const userdata = [
    {
        username: 'smartcrushing',
        email: 'smartcrushing@gmail.com',
        password: 'password123',
        name: 'Noah',
        wish_list: 'Camping supplies'
    },
    {
        username: 'departureseamstress',
        email: 'departureseamstress@gmail.com',
        password: 'password123',
        name: 'Ashley',
        wish_list: 'Exercise equipment'
    },
    {
        username: 'lettercut',
        email: 'lettercut@gmail.com',
        password: 'password123',
        name: 'Jesse',
        wish_list: 'Instrument'
    },
    {
        username: 'unwrittentendon',
        email: 'unwrittentendon@gmail.com',
        password: 'password123',
        name: 'Donald',
        wish_list: 'A good book'
    },
    {
        username: 'grotesqueliterature',
        email: 'grotesqueliterature@gmail.com',
        password: 'password123',
        name: 'Hugo',
        wish_list: 'Craft supplies'
    },
    {
        username: 'hamsterring',
        email: 'hamsterring@gmail.com',
        password: 'password123',
        name: 'Sophia',
        wish_list: 'Something unique'
    },
    {
        username: 'thepaddle',
        email: 'thepaddle@gmail.com',
        password: 'password123',
        name: 'Janis',
        wish_list: 'Power tools'
    },
    {
        username: 'adventurehabitat',
        email: 'adventurehabitat@aol.com.cn',
        password: 'password123',
        name: 'Tommy',
        wish_list: 'Bike'
    },
    {
        username: 'voidrecall',
        email: 'voidrecall@gmail.com',
        password: 'password123',
        name: 'Alfredo',
        wish_list: 'Sculpting clay'
    },
    {
        username: 'pickycrisp',
        email: 'pickycrisp@gmail.com',
        password: 'password123',
        name: 'Calvin',
        wish_list: 'Exercise weights'
    }
];

const seedUsers = () => User.bulkCreate( userdata, { individualHooks: true } );

module.exports = seedUsers;
