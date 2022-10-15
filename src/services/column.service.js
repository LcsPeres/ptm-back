const db = require('./database.service');

function getTasksFromBoard(id) {
    return db.executeQuery('SELECT * FROM `tb_task` WHERE `idBoard` = "' + id + '"');
}

function transferTaskToColumn(idTask, toColumn) {
    return db.executeQuery('UPDATE `tb_task` SET `column` = ' + toColumn + ' WHERE `id` = "' + idTask + '"');
}

module.exports = {
    getTasksFromBoard,
    transferTaskToColumn
}