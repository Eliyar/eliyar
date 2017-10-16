const state = {
    portfolios: [{
        project: {
            id: 'R3bO6iky',
            name: 'Socialseek Studio',
            url: 'https://google.ca',
            logoUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508027763/R3bO6iky/j44bvWMfSK84YPvJ.svg',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/v1508024884/R3bO6iky/I2EIxBiS7kEmnegs.png',
            showProject: true,
            showDesigns: true
        },
        assets: [{
            id: 'H1FxAsQl',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508114223/R3bO6iky/Xo8QIds1ITcyBaXQ.jpg',
            thumbnailUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/c_limit,h_100,w_150/v1508114223/R3bO6iky/Xo8QIds1ITcyBaXQ.jpg',
            caption: 'Sign In to Socialseek Studio'
        }, {
            id: 'pTInCTEj',
            imageUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/v1508024884/R3bO6iky/I2EIxBiS7kEmnegs.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508024884/R3bO6iky/I2EIxBiS7kEmnegs.png',
            caption: 'This is the other caption'
        }, {
            id: 'AMzwICyC',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508024877/R3bO6iky/GvhlQJLsaY1Nj5zE.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508024877/R3bO6iky/GvhlQJLsaY1Nj5zE.png',
            caption: 'Content builder'
        }, {
            id: 'iG4hfgqI',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508024883/R3bO6iky/WXcjS2eTVDUJLf2E.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508024883/R3bO6iky/WXcjS2eTVDUJLf2E.png',
            caption: 'Media catalogue'
        }, {
            id: 'YBhOGcQX',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508024878/R3bO6iky/ETp10t7xHi3qnpY2.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508024878/R3bO6iky/ETp10t7xHi3qnpY2.png',
            caption: 'Products catalogue'
        }, {
            id: 'B73q7EVL',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508024877/R3bO6iky/cQIvEy7PSurBbxLa.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508024877/R3bO6iky/cQIvEy7PSurBbxLa.png',
            caption: 'Analytics'
        }, {
            id: 'NGkGWJo8',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508029958/R3bO6iky/kpsgCCJ2XzX5gCUh.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508029958/R3bO6iky/kpsgCCJ2XzX5gCUh.png',
            caption: 'Billing Page'
        }, {
            id: 'YZTnAI1J',
            imageUrl: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1508024875/R3bO6iky/f7eZxmTeGcYk68YK.png',
            thumbnailUrl: 'http://res.cloudinary.com/dspnhpwnp/image/upload/t_media_lib_thumb/v1508024875/R3bO6iky/f7eZxmTeGcYk68YK.png',
            caption: 'Team Page'
        }]
    }, {
        project: {
            id: 'N1cp5waz',
            name: 'Project B',
            url: 'https://youtube.ca',
            logoUrl: null,
            thumbnailUrl: null,
            showProject: true,
            showDesigns: true
        }
    }, {
        project: {
            id: 'nEOjTaTX',
            name: 'Project C',
            url: 'https://twitter.com',
            logoUrl: null,
            thumbnailUrl: null,
            showProject: true,
            showDesigns: true
        }
    }, {
        project: {
            id: 'qYQb30qJ',
            name: 'Project D',
            url: 'https://facebook.com',
            logoUrl: null,
            thumbnailUrl: null,
            showProject: true,
            showDesigns: true
        }
    }]
}

const getters = {
    getPortfolios: state => {
        return state.portfolios;
    }
}

export default {
    state,
    getters
}