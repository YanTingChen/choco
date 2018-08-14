const Sequelize = require('sequelize');

class Post {
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
        this.ctx = this.se.define('post', {
            pid: {
                type: Sequelize.INTEGER,
            },
            uid: {
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING(20),
            },
            context: {
                type: Sequelize.STRING,
            },
            img: {
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

    async findAll(condition) {
        const find = await this.ctx.findAll({
            where: condition,
        });
        return find;
    }
}
module.exports = Post;
