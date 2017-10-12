const state = {
    portfolios: [{
        project: {
            id: '9183944171',
            name: 'Project A',
            url: 'https://google.ca',
            logo: 'logo_url',
            thumbnail: 'thumbnail_url',
        },
        assets: [{
            id: '2352493415',
            url: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1507765101/Test%20Folder/Test_Image.jpg',
            caption: 'This is the caption',
            created_at: '2017-10-01'
        }, {
            id: '6742181019',
            url: 'https://res.cloudinary.com/dspnhpwnp/image/upload/v1507765101/Test%20Folder/Test_Image_2.jpg',
            caption: 'This is the other caption',
            created_at: '2017-10-01'
        }]
    }, {
        project: {
            id: '3473679912',
            name: 'Project B',
            url: 'https://youtube.ca',
            logo: 'logo_url',
            thumbnail: 'thumbnail_url',
        }
    }, {
        project: {
            id: '0469409122',
            name: 'Project C',
            url: 'https://twitter.com',
            logo: 'logo_url',
            thumbnail: 'thumbnail_url',
        }
    }]
}

const getters = {
    getPortfolios: state => {
        return state.portfolios;
    }
}

export default {
    state: state,
    getters: getters
}