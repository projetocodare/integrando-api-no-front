const PlaylistRepository = {

    getFeaturedPlaylist: () => {
        return { 
            title: 'Trabalhando de casa',
            description: 'Uma seleção de hits pra te acompanhar no home office.',
            buttonUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWXhBG1ELU1nr?utm_source=embed_v2&go=1&play=1&nd=1'
        }
    },

    getMainPlaylists: () => {
        return [
            {
                title: 'Top Brasil',
                description: 'A playlist com os maiores hits do país',
                items: [
                    {
                        image: 'https://yt3.ggpht.com/ytc/AAUvwniMY8ctzmWzADlg8PVmUEu72vJFRSH0Ps_7gmTm8Q=s900-c-k-c0x00ffffff-no-rj',
                        title: 'Só tem eu',
                        description: 'Zé Felipe'
                    },
                    {
                        image: 'https://i.ytimg.com/vi/M5v9lRe9JTc/maxresdefault.jpg',
                        title: 'Não valeu',
                        description: 'Wesley Safadão'
                    },
                    {
                        image: 'https://www.musicasmaistocadas.mus.br/wp-content/uploads/2020/03/Ranking-Jorge-Matheus.png',
                        title: 'Ranking',
                        description: 'Jorge & Mateus'
                    }
                ]
            },
            {
                title: 'Melhores Artistas',
                description: 'Os melhores artistas da atualidade',
                items: [
                    {
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUwRqMsCssSWUw5EGAkhX85KiJ7WJlYskcg&usqp=CAU',
                        title: 'Kevinho',
                        description: 'Funk'
                    },
                    {
                        image: 'https://daqui.opopular.com.br/polopoly_fs/1.1765128.1588017698!/image/image.jpg_gen/derivatives/landscape_800/image.jpg',
                        title: 'Anitta',
                        description: 'Pop'
                    },
                    {
                        image: 'https://lh3.googleusercontent.com/LNmJNzJbiDeKPFRvJB2z_I6KkxGV79OtYWnL0q_-KozsKpUogb8ui--9MkqJHp6fOGKa4DsPGvcMZXpNNswfZfXl',
                        title: 'Ludmilla',
                        description: 'Funk'
                    },
                    {
                        image: 'https://resources.tidal.com/images/275dcdea/56a0/4acd/8961/7287fdec915e/480x480.jpg',
                        title: 'MC Kekel',
                        description: 'Funk'
                    },
                    {
                        image: 'https://i.pinimg.com/originals/c6/a9/b8/c6a9b8fbd3f7e9cc12625fb0ecec76a8.jpg',
                        title: 'MC Rick',
                        description: 'Funk'
                    },
                    {
                        image: 'https://www.gstatic.com/tv/thumb/persons/611071/611071_v9_bb.jpg',
                        title: 'Florence Welch',
                        description: 'Indie'
                    },
                    {
                        image: 'https://yt3.ggpht.com/ytc/AAUvwnjA19Ni8DqZVwMa4Ex6AxUwaqVMnfOEGwkQlJZ8y_c=s900-c-k-c0x00ffffff-no-rj',
                        title: 'Lady Gaga',
                        description: 'Pop'
                    },
                    {
                        image: 'https://www.vagalume.com.br/dynimage/news42967-big.jpg',
                        title: 'Katy Perry',
                        description: 'Pop'
                    },
                ]
            },
            {
                title: 'Melhores Brasileiras',
                description: 'Grandes hinos da música brasileira para animar sua pista de dança!',
                items: [
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/pt/8/8f/ChegaSaudade.jpg',
                        title: 'Chega de Saudade',
                        description: 'João Gilberto'
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e0/SecoseMolhados1973.jpg/220px-SecoseMolhados1973.jpg',
                        title: 'Secos & Molhados',
                        description: 'Secos & Molhados'
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2a/LadoB-LadoA.jpg/220px-LadoB-LadoA.jpg',
                        title: 'Lado B Lado A',
                        description: 'O Rappa'
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8a/Rpm-revolu%C3%A7%C3%B5es-por-minuto.jpeg/220px-Rpm-revolu%C3%A7%C3%B5es-por-minuto.jpeg',
                        title: 'Revoluções por Minuto',
                        description: 'RPM'
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c8/Clarice_Falc%C3%A3o_-_Monomania.jpg/220px-Clarice_Falc%C3%A3o_-_Monomania.jpg',
                        title: 'Monomania',
                        description: 'Clarice Falcão'
                    },
                ]
            },
            
        ]
    }

}

module.exports = PlaylistRepository