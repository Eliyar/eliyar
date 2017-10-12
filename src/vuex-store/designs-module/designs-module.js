const state = {
    packages: [{
        project: {
            id: '9183944171',
            name: 'Project A',
            url: 'https://google.ca',
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
    }]
}

const getters = {
    getPackages: state => {
        return state.packages;
    }
}

export default {
    state: state,
    getters: getters
}