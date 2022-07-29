import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './todoList'
import color from './color'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todoList,
    color
  },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todoList: state.todoList,
          color: state.color
        }
      }
    })
  ]
})
