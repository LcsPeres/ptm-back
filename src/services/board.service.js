const db = require('./database.service');

function getBoard(id) {
    return db.executeQuery('SELECT * FROM `tb_board` WHERE `id` = "' + id + '"');
}

module.exports = {
    getBoard
}