const express = require('express')
const PlaylistRoute = express.Router()
const errors = require('../errors')
const PlaylistUseCase = require('../use-cases/playlistUseCase')

PlaylistRoute.get('/featured', (req, res, next) => {
    try {
        res.send(PlaylistUseCase.getFeaturedPlaylist())
    } catch (error) {
        res.status(500)
        res.send(errors.ServerError)
    }
})

PlaylistRoute.get('/main', (req, res, next) => {
    try {
        res.send(PlaylistUseCase.getMainPlaylists())
    } catch (error) {
        res.status(500)
        res.send(errors.ServerError)
    }
})

module.exports = PlaylistRoute