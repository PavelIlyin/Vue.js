/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localDB = [
    {
        id: 1,
        date: "11.05.2021",
        category: "Food",
        price: 34,
    },
    {
        id: 2,
        date: "12.05.2021",
        category: "Navigation",
        price: 134,
    },
    {
        id: 3,
        date: "13.05.2021",
        category: "Sport",
        price: 423,
    },
    {
        id: 4,
        date: "14.05.2021",
        category: "Education",
        price: 353,
    },
    {
        id: 5,
        date: "15.05.2021",
        category: "Entertaiment",
        price: 235,
    },
    {
        id: 6,
        date: "15.05.2021",
        category: "Food",
        price: 34,
    },
    {
        id: 7,
        date: "16.05.2021",
        category: "Education",
        price: 353,
    },
    {
        id: 8,
        date: "17.05.2021",
        category: "Sport",
        price: 765,
    }
]

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: ['Food', 'Transport', 'Education', 'Entertainment', 'Sport', 'Navigation'],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        onDataAddedMutation(state, payload) {
            if (payload.date != "" && payload.category != "" && (payload.price != "" && payload.price != 0)) {
                state.paymentsList.push({ id: state.paymentsList.length + 1, date: payload.date, category: payload.category, price: payload.price })
            }
            payload.date = "", payload.category = "", payload.price = ""
        },

        ondateDeleteMutation(state, payload) {
            state.paymentsList = state.paymentsList.filter(item => item.id !== payload)
        },

        onDataUpdatedMutation(state, payload) {
            const item = state.paymentsList.find(item => item.id === payload.id)
            if (item) {
                Object.assign(item, payload)
            }
        },

    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getCategoryList: state => state.categoryList,

    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = localDB
                    resolve(items)
                }, 1000)
            })
                .then(res => {
                    commit('setPaymentsListData', res)
                })
        },
    },

})