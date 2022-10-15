const express = require('express');
const router = express.Router();
const ColumnService = require('../services/column.service');

router.get('/transfer/:idTask/:idColumn', async (req, res, next) => {
    try {
        await ColumnService.transferTaskToColumn(req.params.idTask, req.params.idColumn);

        res.send().status(201);
    } catch (error) {
        res.status(500).json({
            error: "Ocorreu um erro",
            message: error.message
        });
    }
});

module.exports = router;