import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '123456789',
        baseUrl: 'http://localhost:8080/api',
        user: {
            id: 1,
            nickname: 'l恋',
            avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/logo/3338e89a-9fe7-419c-84b8-9f210de1cae3.jpg'
        }
    },
    mutations: {
        setToken(state, data) {
            state.token = data;
        },
        setUser(state, data) {
            state.user = data;
        }
    },
    actions: {},
    modules: {}
})


