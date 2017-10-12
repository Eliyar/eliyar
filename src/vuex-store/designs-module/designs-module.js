const state = {
    data: {
        value: 321
    }
}

const getters = {
    getValue: state => {
        return state.data;
    }
}

export default {
    state: state,
    getters: getters
}