const state = {
    projects: [{
        project: {
            id: '6867973407',
            name: 'Project A',
            url: 'https://google.ca',
            logo: 'logo_url',
            thumbnail: 'thumbnail_url',
        }
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
    getProjects: state => {
        return state.projects;
    }
}

export default {
    state: state,
    getters: getters
}