import { createStore } from "vuex"

export default createStore({

    /* ストアで管理するデータのこと */
    /* 複数のコンポーネントで利用する値をグローバルストアでは扱う */
    state: {
        user_id: null,
        password: null
    }, 

    /* ステートを更新するメソッドのこと */
    mutations: {
        
        login(state, payload) {
            state.user_id = payload.user_id;
            state.name = payload.name;
        },

        logout(state) {
            state.user_id = null;
            state.password = null;
        } 
    }, 

    actions: {

    },

    modules: {

    }

});