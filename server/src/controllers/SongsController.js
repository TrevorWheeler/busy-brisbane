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
  }
}