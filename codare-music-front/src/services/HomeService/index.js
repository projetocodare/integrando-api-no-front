import HttpService from "../../core/services/HttpService"

const httpService = HttpService

const HomeService = {

    loadSidebar: async () => {
        return httpService.get('').then((response) => response.data)
    },

    loadMainBanner: async () => {
        return httpService.get('').then((response) => response.data)
    },

    loadPlaylists: async () => {
        return httpService.get('').then((response) => response.data)
    }

}

export default HomeService