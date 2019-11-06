
<template>
    <div>
<h1>登录</h1>
<Button @click="login()">登录</Button>
<route_list></route_list>
    </div>
</template>

<script>
import route_list from '../components/route_list'
    export default {
        components:{
            route_list
        },
    data(){
        return{

        }
    },
      methods:{
         async login(){
            const result = await this.$axiosGet("/login",{});
            this.$store.commit('me/changeLogin',{result})

          }
        },

}
</script>

<style lang="less" scoped>

</style>
