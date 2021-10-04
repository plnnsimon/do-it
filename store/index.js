import firebase from "~/plugins/firebase";

export const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
        if (!authUser) {
          state.commit('SET_USER', null)
        //   this.$router.push({
        //       path: '/login'
        //   })
        console.log('not logged in')
        } else {
            console.log('logged in');
        const { uid, email } = await authUser
        if (uid === 'NJu9m7eiAuVYXfyWrU9Nl3M8A3m2') {
            console.log('admin');
            state.commit("SET_ADMIN", {
                uid,
                email
            })
        }

        await firebase.database().ref('users').child(uid).once('value').then(data => {
            state.commit("SET_USER", data.val())
            })
            .catch(err => console.error(err.message))
        }
      }
}

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    SET_ADMIN(state, admin) {
        state.admin = admin
    },
}

export const state = () => ({
    user: null,
    admin: null
})

export const getters = {
    getUser(state) {
        return state.user
    },
    getAdmin(state) {
        return state.admin
    },
}