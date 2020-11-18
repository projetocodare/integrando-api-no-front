const IndexUseCase = {

    loadSideBar: async () => {
        
        const payload = {
            genders: [
                'Adulto Contemporâneo',
                'British Invasion',
                'Dance Pop',
                'Pop',
                'Rock',
                'Rock Alternativo',
                'Rock Clássico',
                'Rock Pop',
                'Rock de Arena'
            ],
            artists: [
                'Matuê',
                'Zé Felipe',
                'Zé Ramalho',
                'Hariel',
                'Emicida',
                'Anitta',
                'Froid',
                'Elis Regina',
                'Nando Reis',
                'Seu Jorge'
            ]
        }

        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(payload)
            }, 2000)
        })
    },

    loadMainBanner: async () => {
        
        const payload = {
           title: 'Festa Brasileira',
           description: 'Grandes hinos da música brasileira para animar sua pista de dança!',
           buttonUrl : 'https://open.spotify.com/playlist/37i9dQZF1DX1oTjVZnUYT3'
        }

        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(payload)
            }, 2000)
        })

    }
}

export default IndexUseCase
