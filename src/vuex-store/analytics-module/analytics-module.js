const firebase = require('firebase')

// Initialize Firebase and link up project
const firebaseApp = firebase.initializeApp(process.env.FIREBASE)

// Firebase database references
const db = firebaseApp.database()
const analyticsRef = db.ref('/analytics');

// Authenticate session (using anonymous sign-in method) for Firebase READ/WRITE 
let authenticated = false;

function firebaseAuthenticate() {
    return firebase.auth().signInAnonymously().then(() => {
        authenticated = true;
    });
}

const state = {
    pages: {},
    projects: {},
    assets: {},
    clicks: {},
    referrers: {}
}

const getters = {
    getPageViews(state) {
        return state.pages;
    },
    getProjectViews(state) {
        return state.projects;
    },
    getAssetViews(state) {
        return state.assets;
    },
    getPageClicks(state) {
        return state.clicks;
    },
    getPageReferrers(state) {
        return state.referrers;
    }
}

const mutations = {
    updatePageViews(state, data) {
        state.pages = data;
    },
    updateProjectViews(state, data) {
        state.projects = data;
    },
    updateAssetViews(state, data) {
        state.assets = data;
    },
    updatePageClicks(state, data) {
        state.clicks = data;
    },
    updatePageReferrers(state, data) {
        state.referrers = data;
    },
}

const actions = {
    fetchAnalytics({ commit }) {
        if (!authenticated) {
            firebaseAuthenticate().then(() => {
                analyticsRef.on('value', function(snapshot) {
                    if (snapshot.val().hasOwnProperty('pages')) {
                        commit('updatePageViews', snapshot.val().pages)
                    }

                    if (snapshot.val().hasOwnProperty('projects')) {
                        commit('updateProjectViews', snapshot.val().projects)
                    }

                    if (snapshot.val().hasOwnProperty('assets')) {
                        commit('updateAssetViews', snapshot.val().assets)
                    }

                    if (snapshot.val().hasOwnProperty('clicks')) {
                        commit('updatePageClicks', snapshot.val().clicks)
                    }

                    if (snapshot.val().hasOwnProperty('referrers')) {
                        commit('updatePageReferrers', snapshot.val().referrers)
                    }
                });
            })
        }
    },
    updatePageViews({ commit }, page) {
        firebaseAuthenticate().then(() => {
            analyticsRef.child('pages').child(page).transaction(function(count) {
                return (count || 0) + 1;
            })
        })
    },
    updatePageClicks({ commit }, click) {
        firebaseAuthenticate().then(() => {
            analyticsRef.child('clicks').child(click).transaction(function(count) {
                return (count || 0) + 1;
            })
        })
    },
    updateProjectViews({ commit }, projectId) {
        firebaseAuthenticate().then(() => {
            analyticsRef.child('projects').child(projectId).transaction(function(count) {
                return (count || 0) + 1;
            })
        })
    },
    updateAssetViews({ commit }, payload) {
        firebaseAuthenticate().then(() => {
            analyticsRef.child('assets').child(payload.projectId + '/' + payload.assetId).transaction(function(count) {
                return (count || 0) + 1;
            })
        })
    },
    updatePageReferrers({ commit }, url) {
        if (!url) {
            return;
        }

        firebaseAuthenticate().then(() => {
            const key = analyticsRef.child('referrers').push().key;
            analyticsRef.child('referrers').child(key).update({ url: url });
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}