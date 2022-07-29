export default {
  namespaced: true,
  state: {
    fontColor: '#b83f45'
  },
  mutations: {
    setFontColor(state) {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      state.fontColor = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    }
  },
  actions: {
    setFontColor({ commit }, payload) {
      commit('setFontColor', payload)
    }
  },
  getters: {},
  modules: {}
}
