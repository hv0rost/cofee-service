import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    getters : {
      getCounter(state) {
          return state.count
      }

    },
    mutations: {
        incrementCounter (state) {
            state.count++;
        },
        clearCounter (state) {
            state.count = 0;
        }
    }
})

export default store;