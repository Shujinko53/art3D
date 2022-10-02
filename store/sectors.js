export const state = () => ({
    sectors: [
        {
            id: 1,
            name: 'Розовый сегмент',
            coords: '251,260,172,14,238,1,293,3,353,18,407,48,451,88,490,147,511,213,513,264',
            shape: 'poly',
            color: '#ff69b4',
        },
        {
            id: 2,
            name: 'Зеленый сегмент',
            coords: '249,259,171,14,109,43,62,87,27,138,5,202,0,269,12,335,39,394,84,449,142,486',
            shape: 'poly',
            color: '#97bb31',
        },
        {
            id: 3,
            name: 'Серый сегмент',
            coords: '250,259,142,486,185,502,236,512,294,510,353,495,412,462,461,415,496,354,510,303,513,264',
            shape: 'poly',
            color: '#d9d9d9',
        },
    ],

    activeSector: {},
});

export const getters = {
    //
};

export const actions = {
    setActiveSector({ commit }, sector) {
        commit('SET_ACTIVE_SECTOR', sector);
    },

    clearActiveSector({ commit }) {
        commit('CLEAR_ACTIVE_SECTOR');
    },
};

export const mutations = {
    SET_ACTIVE_SECTOR(state, payload) {
        state.activeSector = payload;
    },

    CLEAR_ACTIVE_SECTOR(state) {
        state.activeSector = {};
    },
};
