const Sequelize = require('sequelize');

class User {
    constructor() {
        this.se = new Sequelize('choco', 'root', '', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });
        this.ctx = this.se.define('user', {
            uid: {
                type: Sequelize.INTEGER,
            },
            account: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
        }, {
            timestamps: false,
            freezeTableName: true,
        });
    }

    async create(data) {
        const res = await this.ctx.create(data);
        return res;
    }
}
module.exports = User;
