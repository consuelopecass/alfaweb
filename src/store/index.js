import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebaseDB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
  },
  mutations: {
  },
  actions: {
    fetchCursos(){
      db.collection('cursos').get().then((resp)=>{
        resp.forEach((doc)=>{
          console.log(`${doc.id} => ${doc.data}`);
          console.log(doc.data());
        })
      })
    }
  },
  modules: {
  },
})
