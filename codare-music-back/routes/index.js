const SiderbarRoute = require('./sidebarRoute')
const PlaylistRoute = require('./playlistRoute')

const routes = [
    {
        PATH: '/sidebar', HANDLER: SiderbarRoute
    },
    {
        PATH: '/playlist', HANDLER: PlaylistRoute
    }
]

module.exports = (app) => {
    routes.map((route) => {
        console.log(`[ROUTE] :: ${route.PATH}`)
        app.use(route.PATH, route.HANDLER)
    })
}