import { createStore } from "vuex"

export default createStore({

    /* ストアで管理するデータのこと */
    /* 複数のコンポーネントで利用する値をグローバルストアでは扱う */
    state: {
        is_login: false,

    }, 

    /* ステートを更新するメソッドのこと */
    mutations: {
        
        login(state) {
            state.is_login = true;
        },

        logout(state) {
            state.is_login = false;
        } 
    }, 

    actions: {

    },

    modules: {

    }

});