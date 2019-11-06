import Vue from 'vue'
import router from '../router';
export default{
    namespaced:true,
    state:{
        login :false
    },
    mutations:{
        changeLogin(state,{result}){
            state.login = result;
        }
    },
    actions:{
        async checkMe({commit}){
            //请求/me接口,对登录信息进行判断,并保留状态
            const result = await Vue.prototype.$axiosGet('/me',{});
            if(!result){
                router.push({name:'login'})
                return
            }
            commit('changeLogin',{result})
        }
    }
}
