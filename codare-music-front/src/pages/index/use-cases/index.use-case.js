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

    },

    loadPlaylists: async () => {

        const payload = [
            {
                title: 'Playlists recomendadas',
                description: 'Com base no que escutou nos ultimos dias',
                items: [1,2,3,4,5,6,7,8,9,1,2,3,4,5].map(i => {
                    return {
                        image: 'https://s.glbimg.com/jo/g1/f/original/blog/b8e01596-f282-4f4b-bd7c-90f8222fd43c_matanzaassimcomecaabebedeiracapa.jpg',
                        title: 'Best os Start is Born',
                        description: 'Best os Start is Born Best os Start is Born Best os Start is Born Best os Start is Born'
                    }
                })
            },
            {
                title: 'Tocadas recentemente',
                description: 'Com base no que escutou nos ultimos dias',
                items: [1,2,3,4,5,6,7,8,9,1,2,3,4,5].map(i => {
                    return {
                        image: 'https://i.pinimg.com/originals/48/51/ce/4851ceb41ffd1f5f35d5735e6af3ffb0.jpg',
                        title: 'Best os Start is Born',
                        description: 'Best os Start is Born Best os Start is Born Best os Start is Born Best os Start is Born'
                    }
                })
            }
        ]

        
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(payload)
            }, 500)
        })

    }

}

export default IndexUseCase
