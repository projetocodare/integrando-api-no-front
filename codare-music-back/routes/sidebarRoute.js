const express = require('express')
const SidebarRoute = express.Router()
const errors = require('../errors')
const SidebarUseCase = require('../use-cases/sidebarUseCase')

SidebarRoute.get('/data', (req, res, next) => {
    try {
        res.send(SidebarUseCase.getSidebarData())
    } catch (error) {
        res.status(500)
        res.send(errors.ServerError)
    }
})

module.exports = SidebarRoute