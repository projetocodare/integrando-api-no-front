const ArtistsRepository = require('../repositories/artistRepository')
const GendersRepository = require('../repositories/genderRepository')

const SidebarUseCase = {

    getSidebarData: () => {

        const allArtists = ArtistsRepository.getAllArtists()
        const allGenders = GendersRepository.getAllGenders()

        return {
            genders: allGenders, 
            artists: allArtists
        }
    }


}

module.exports = SidebarUseCase