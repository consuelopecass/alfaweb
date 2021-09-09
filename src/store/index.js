import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebaseDB'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    email:'',
  },
  getters: {

    totalCursos: state => state.cursos.length, 
    totalCursosActivos: (state) => {
      let cursoActivo = state.cursos.filter((curso) => {
        if(curso.estado == 'Sí'){
          return curso
        }
      })
      return cursoActivo.length
    }, 
    totalCursosTerminados: (state) => {
      let cursoTerminado = state.cursos.filter((curso) => {
        if(curso.estado == 'No'){
          return curso
        }
      })
      return cursoTerminado.length
    },
    totalCuposPermitidos: (state) => {
      return state.cursos.reduce(function(total,curso){
        return total + parseInt(curso.cupos)
      })
    }, 
    totalCuposInscritos : (state)=> {
      return state.cursos.reduce(function(total, curso){
        return total + parseInt(curso.inscritos)
      },0)
    },
    totalCuposRestantes: (state, getter)=>{
      console.log(getter.totalCursosInscritos)
      return getter.totalCuposPermitidos - getter.totalCuposInscritos
    }
  },
   
  mutations: {
    SET_EMAIL(state, email){
      state.email = email
    },
    RESET_EMAIL(state){
      state.email = ''
    },
    READ_CURSO(state, curso){
      
      state.cursos.push({
        id: curso.id, 
        nombre: curso.data().nombre,
        descripcion: curso.data().descripcion,
        cupos: curso.data().cupos,
        duracion: curso.data().duracion,
        estado: curso.data().estado,
        fecha: curso.data().fecha,
        img: curso.data().img,
        inscritos: curso.data().inscritos,
        costo: curso.data().costo,
      })
    },
    ADD_CURSO(state, curso){
      state.cursos.push({
        id: curso.id, 
        nombre: curso.data().nombre,
        descripcion: curso.data().descripcion,
        cupos: curso.data().cupos,
        duracion: curso.data().duracion,
        estado: curso.data().estado,
        fecha: curso.data().fecha,
        img: curso.data().img,
        inscritos: curso.data().inscritos,
        costo: curso.data().costo,
      })
    },
    RESET_CURSOS(state){
      state.cursos = []
    }
    
  },
  actions: {
    fetchCursos({commit}){
      db.collection('cursos').get().then((resp)=>{
        commit('RESET_CURSOS')
        resp.forEach((doc)=>{
          commit('READ_CURSO', doc) 
        })
      })
    },
    //CREATE
    createCurso({}, curso){
      return db.collection('cursos').add(curso);
    },
    //OBTENER CURSO POR ID (UNITARIO, SÓLO UN CURSO)
    fetchIdCurso({}, id_curso){
      return db.collection('cursos').doc(id_curso).get(); 
    },
    //UPDATE
    updateCurso({}, curso){
      return db.collection('cursos').doc(curso.id).update(curso);
    },
    //DELETE
    deleteCurso({}, id_curso){
      return db.collection('cursos').doc(id_curso).delete();
    },
    setMail({commit}, email){
      commit('SET_EMAIL', email)
    },
    resetEmail({commit}){
      commit('RESET_EMAIL')
    },
  },
  modules: {
  },
})
