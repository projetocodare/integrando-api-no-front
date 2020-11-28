const PlaylistRepository = require('../repositories/playlistRepository')

const PlaylistUseCase = {

    getFeaturedPlaylist: () => {
        return PlaylistRepository.getFeaturedPlaylist()
    },

    getMainPlaylists: () => {
        return PlaylistRepository.getMainPlaylists()
    }

}

module.exports = PlaylistUseCase