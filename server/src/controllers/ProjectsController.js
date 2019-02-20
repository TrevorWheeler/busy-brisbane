const { Project } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
  async index (req, res) {
    try {
      let projects = null
      const search = req.query.search

      //return search query if search initialised else return projects
      if (search) {
        projects = await Project.findAll( {
          where: {
            [Op.or]: [
              'title'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } 
      else {
        projects = await Project.findAll({
          limit: 10
        })
      }
      
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