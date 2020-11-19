import HttpService from "../../core/services/HttpService"

const httpService = HttpService

const HomeService = {

    loadSidebar: async () => {
        return httpService.get('').then((data) => data)
    },

    loadMainBanner: async () => {
        return httpService.get('').then((data) => data)
    },

    loadPlaylists: async () => {
        return httpService.get('').then((data) => data)
    }

}

export default HomeService