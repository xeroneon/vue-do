import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.unshift({ title: payload.title, done: false })
    },

    completeTodo (state, payload) {
      state.todos[payload.index].done = !state.todos[payload.index].done
    },
    
    deleteTodo (state, payload) {
      state.todos.splice(payload.index, 1)
    }
  },
  actions: {

  }
})
