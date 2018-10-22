<template>
    <div>
        {{name}}
    </div>
</template>
<style lang="less" scoped>

</style>
<script>
export default {
    name:'login',
    data(){
        return {
            name:'登录页面'
        };
    },
    methods:{

    },
    mounted(){
        console.log('login');
    }
}
</script>


