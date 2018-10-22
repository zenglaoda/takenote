<template>
    <div>
        <!-- <router-link to="/project">项目列表页</router-link>
        <router-link to="/">登录页</router-link> -->
        <div style="border:1px solid #ccc;min-height:300px;">
           <router-view></router-view>
        </div>
    </div>
</template>
<style lang="less">

</style>
<script>
export default {
    name:'app',
    data(){
        return{
            name:'app'
        };
    },  
    methods:{

    }, 
    mounted(){

    },
}
</script>

