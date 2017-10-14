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
    analytics: {}
}

const getters = {
    getAnalytics(state) {
        return state.analytics;
    }
}

const mutations = {
    updateAnalytics(state, data) {
        state.analytics = data;
    }
}

const actions = {
    fetchAnalytics({ commit }) {
        if (!authenticated) {
            firebaseAuthenticate().then(() => {
                analyticsRef.on('value', function(snapshot) {
                    commit('updateAnalytics', snapshot.val())
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
    updatePageReferrer({ commit }, url) {
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

// {
// 	pages: {
// 		home: 0,
// 		projects: 0,
// 		designs: 0
// 		contact: 0,
// 	},
// 	projects: [{
// 		_id: 0
// 	}],
// 	assets: [{
// 		_id: 0
// 	}],
// 	clicks {
// 		github: 0,
// 		linkedin: 0
// 	},
// refereral: []
// }