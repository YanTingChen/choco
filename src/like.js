const Sequelize = require('sequelize');

class Like {
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
        this.ctx = this.se.define('likes', {
            lid: {
                type: Sequelize.INTEGER,
            },
            uid: {
                type: Sequelize.INTEGER,
            },
            pid: {
                type: Sequelize.INTEGER,
            },
            likes: {
                type: Sequelize.TINYINT(2),
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

    async findAll(condition) {
        const find = await this.ctx.findAll({
            where: condition,
        });
        return find;
    }
}
module.exports = Like;
