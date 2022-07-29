export default {
  namespaced: true,
  state: {
    todoList: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    addTodoList(state, payload) {
      state.todoList.unshift(payload)
    },
    delTodoList(state, payload) {
      state.todoList = state.todoList.filter((ele) => ele !== payload)
    }
  },
  actions: {
    addTodoList({ commit }, payload) {
      commit('addTodoList', payload)
    },
    delTodoList({ commit }, payload) {
      commit('delTodoList', payload)
    }
  },
  getters: {},
  modules: {}
}
