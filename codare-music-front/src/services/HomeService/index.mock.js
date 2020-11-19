const HomeServiceMock = {

    loadSidebar: async () => {
        
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
                title: 'Melhores Álbuns',
                description: 'Com base no que escutou nos ultimos dias',
                items: [1,2,3,4,5,6,7,8,9,1,2,3,4,5].map(i => {
                    return {
                        image: 'https://a-static.mlcdn.com.br/618x463/cd-iron-maiden-iron-maiden-1980-remastered-digipack-warner-music/kantodoartistamusicaimagem/6276471233/3f4edf2f8e0c45feb68335a543b7f341.jpg',
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

export default HomeServiceMock