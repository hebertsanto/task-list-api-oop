const TaskModel = require('../models/task');

class TaskController {

  async getAllTasks(req, res) {
    const task = await TaskModel.findAll();

    if (task.length == 0) {
      res.json({
        msg: 'task not found'
      })
    };

    res.json({
      task
    }).status(200)
  }
  async createTask(req, res) {

    try {

      const { title, description } = req.body;

      const newTask = await TaskModel.create({
        title,
        description
      });

      return res.json({
        msg: 'Task created successfully',
        newTask
      }).status(201);

    } catch (error) {
      return console.error(error, 'error');
    }

  }

  async editTask(req, res) {
    try {

      const { title, description} = req.body;
      const editTask = await TaskModel.findOne({ where: { id: req.params.id }});

      if(!editTask){
        return res.json({
          msg: 'task not found'
        })
      };
      
      await editTask.update({ title, description });
    
      res.json({
        msg:'edit task successfully',
        editTask
      })
    } catch (error) {
      return console.log(error, 'error');
    }
  }
  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const existingTask = await TaskModel.findByPk(id)

      if (!existingTask) {
        return res.status(404).json({ msg: 'task not found' });
      }

      await existingTask.destroy();

      res.json({
        msg: 'task deleted'
      });

    } catch (e) {
      return console.log(e, 'error');
    }
  }
}

module.exports = TaskController;