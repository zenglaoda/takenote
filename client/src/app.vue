<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style lang="less" scoped>
    #app{
        height: 100%;
    }
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

