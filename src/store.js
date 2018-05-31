import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryList: [],
    labelList: []
  },
  mutations: {
    SETCAT(state, data){
      state.categoryList = data
    },
    SETLAB(state, data){
      state.labelList = data
    }
  },
  actions: {
    setCategoryList({ commit }, data){
      commit('SETCAT', data)
    },
    setLabelList({ commit }, data){
      commit('SETLAB', data)
    }
  },
  // 取
  getters: {
     getCategoryList: (state)=>{
      return state.categoryList
    },
    getLabelList: state => {
      return state.labelList
    }
  }
})
