const express = require('express');
const router = express.Router();
const BoardService = require('../services/board.service');
const ColumnService = require('../services/column.service');

router.get('/:id', async (req, res, next) => {
    try {
        let colunas = await ColumnService.getTasksFromBoard(req.params.id).then((data) => {
            return data;
        });

        let board = await BoardService.getBoard(req.params.id).then((board) => { return board });

        res.json({
            id: req.params.id,
            boardName: board[0].name,
            blocks: colunas.filter(column => { return column.column == 4 }),
            backlog: colunas.filter(column => { return column.column == 0 }),
            wip: colunas.filter(column => { return column.column == 1 }),
            test: colunas.filter(column => { return column.column == 2 }),
            done: colunas.filter(column => { return column.column == 3 })
        });
    } catch (error) {
        res.status(500).json({
            error: "Ocorreu um erro",
            message: error.message
        });
    }
});

module.exports = router;