import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModal:false,
    isModal_2:false,
    isModal_3:false,
    isEditModal:false,
    isEditModal_2:false,
    isEditModal_3:false,
    Faoliyat:false,

    soreModal:false,
    soreModal_2:false,
    soreModal_3:false,
    soreModal_4:false,
    soreModal_5:false,
    
    editModal:false,
    editModal_2:false,
    editModal_3:false,
    editModal_4:false,
    editModal_5:false,

    SoreHistory: false,


    Faoliyati:[],
    doctors:[],
    sores:[],
    kasallik_tarixi:[]
  },
  mutations: {
    isModal(state,payload){
      state.isModal = payload
    },
    isModal_2(state,payload){
      state.isModal_2 = payload
    },
    isModal_3(state,payload){
      state.isModal_3 = payload
    },
    isEditModal(state,payload){
      state.isEditModal = payload
    },
    isEditModal_2(state,payload){
      state.isEditModal_2 = payload
    },
    isEditModal_3(state,payload){
      state.isEditModal_3 = payload
    },

    soreModal(state,payload){
      state.soreModal = payload
    },
    soreModal_2(state,payload){
      state.soreModal_2 = payload
    },
    soreModal_3(state,payload){
      state.soreModal_3 = payload
    },
    soreModal_4(state,payload){
      state.soreModal_4 = payload
    },
    soreModal_5(state,payload){
      state.soreModal_5 = payload
    },

    editModal(state,payload){
      state.editModal = payload
    },
    editModal_2(state,payload){
      state.editModal_2 = payload
    },
    editModal_3(state,payload){
      state.editModal_3 = payload
    },
    editModal_4(state,payload){
      state.editModal_4 = payload
    },
    editModal_5(state,payload){
      state.editModal_5 = payload
    },

    SoreHistory(state,payload){
      state.SoreHistory = payload
    },

    addbemor(state,payload){
      state.sores.push(payload)
    },
    addSores(state,payload){
      state.sores = payload
    },
    histSore(state,payload){
      state.kasallik_tarixi.push(payload)
    },
    getsorehistory(state,payload){
      state.kasallik_tarixi = payload
    },

    Faoliyat(state,payload){
      state.Faoliyat = payload
    },
    addDoctor(state,payload){
      state.doctors.push(payload)
    },
    FaolDoctor(state,payload){
      state.doctors.push(payload)
    },
    addDoctors(state,payload){
      state.doctors = payload
    },
    DoctorFaol(state,payload){
      state.Faoliyati = payload
    },
    delDoc(state,payload){
      state.doctors.splice(payload,1)
    },
    delsore(state,payload){
      state.sores.splice(payload,1)
    }
  },
  actions: {
    addDoc(context,payload){
      axios.post('http://localhost:3000/doctors',payload).then(response =>{
        context.commit('addDoctor',response.data)
      })
    },
    addFaol(context,payload){
      axios.post('http://localhost:3000/ish_faoliyati',payload).then(response =>{
        context.commit('FaolDoctor',response.data)
      })
    },
    addDoctors(context){
      axios.get('http://localhost:3000/doctors').then(
        response =>{
          context.commit('addDoctors',response.data)
        }
      )
    },
    addSore(context){
      axios.get('http://localhost:3000/sore').then(
        response =>{
          context.commit('addSores',response.data)
        }
      )
    },
    history(context){
      axios.get('http://localhost:3000/kasallik_tarixi').then(
        response =>{
          context.commit('getsorehistory',response.data)
        }
      )
    },
    DoctorFaol(context){
      axios.get('http://localhost:3000/ish_faoliyati').then(
        response =>{
          context.commit('DoctorFaol',response.data)
        }
      )
    },
    DelDoctors(context,payload){
      axios.delete('http://localhost:3000/doctors/'+payload.id).then(
        () =>{
          context.commit('delDoc',payload.index)
        }
      )
    },
    
    addbemors(context,payload){
      axios.post('http://localhost:3000/sore',payload).then(
        response =>{
          context.commit('addbemor',response.data)
        }
      )
    },
    soreDel(context,payload){
      axios.delete('http://localhost:3000/sore/'+payload.id).then(
        () =>{
          context.commit('delsore',payload.index)
        }
      )
    },
    soreHistoryAdd(context,payload){
      axios.post('http://localhost:3000/kasallik_tarixi',payload).then(
        response =>{
          context.commit('histSore',response.data)
        }
      )
    }
  },
  getters:{
  isModal(state){
    return state.isModal
  },
  isModal_2(state){
    return state.isModal_2
  },
  isModal_3(state){
    return state.isModal_3
  },
  isEditModal(state){
    return state.isEditModal
  },
  isEditModal_2(state){
    return state.isEditModal_2
  },
  isEditModal_3(state){
    return state.isEditModal_3
  },

  soreModal(state){
    return state.soreModal
  },
  soreModal_2(state){
    return state.soreModal_2
  },
  soreModal_3(state){
    return state.soreModal_3
  },
  soreModal_4(state){
    return state.soreModal_4
  },

  editModal(state){
    return state.editModal
  },
  editModal_2(state){
    return state.editModal_2
  },
  editModal_3(state){
    return state.editModal_3
  },
  editModal_4(state){
    return state.editModal_4
  },
  getSores(state){
    return state.sores
  },
  SoreHistory(state){
    return state.SoreHistory
  },
  getHistory(state){
return state.kasallik_tarixi
  },

  Faoliyat(state){
    return state.Faoliyat
  },
  Faoliyati(state){
    return state.Faoliyati
  },
  getDocPost(state){
    return state.doctors
  },
  getDocById(state){
    return DOCID =>{
      return state.doctors.find(i=> i.id == DOCID)
    }
  },
  getBemorById(state){
    return SOREID =>{
      return state.sores.find(i=> i.id == SOREID)
    }
  }
  },
  modules: {
  }
})
