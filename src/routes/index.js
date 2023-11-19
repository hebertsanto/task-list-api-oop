const express = require('express');
const TaskController = require('../controllers/taskController');

class Routes {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        const tasksController = new TaskController();
        this.router.get('/task', tasksController.getAllTasks.bind(tasksController));
        this.router.post('/task', tasksController.createTask.bind(tasksController));
        this.router.put('/task/:id', tasksController.editTask.bind(tasksController));
        this.router.delete('/task/:id', tasksController.deleteTask.bind(tasksController));
    }
    getRoutes() {
        return this.router;
    }
}

module.exports = Routes;