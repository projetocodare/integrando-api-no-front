import HomeService from '../../../services/HomeService'
import HomeServiceMock from '../../../services/HomeService/index.mock'


const homeService = HomeServiceMock

const IndexUseCase = {

    loadSideBar: async () => {
       return homeService.loadSidebar()
    },

    loadMainBanner: async () => {
        return homeService.loadMainBanner()
    },

    loadPlaylists: async () => {
        return homeService.loadPlaylists()
    }

}

export default IndexUseCase
