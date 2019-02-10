const { Project } = require("../models");



module.exports = {
  async index (req, res) {
    try {
      const projects = await Project.findAll()
      res.send(projects)
    }
    catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the projects'
      })
    }
  },
  async show (req, res) {
    try {
      const project = await Project.findByPk(req.params.projectId)
      res.send(project)
    }
    catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the projects'
      })
    }
  },
  async post (req, res) {
    try {
      const project = await Project.create(req.body)
      res.send(project)
    }
    catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the project'
      })
    }
  },
  async put (req, res) {
    try {
      const project = await Project.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    }
    catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the project'
      })
    }
  }
}