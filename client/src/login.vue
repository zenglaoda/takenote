<template>
    <div class="container flex-box">
        <div class="content">
            <div class="row">
                <label class="label">用户名:</label>
                <el-input v-model="name" clearable placeholder="请输入用户名"></el-input>                
            </div>
            <div class="row">
                <label class="label">密码:</label>
                <el-input v-model="name" clearable placeholder="请输入密码"></el-input>                
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100%;
    }
    .flex-box{
        position: relative;        
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }
    .content{
        min-width: 300px;
        max-width: 380px;
        flex-grow: 1;
        .row{
            display: flex;
            flex-flow: row nowrap;
            padding-bottom: 20px;
            .label{
                width:80px;
                text-align: right;
                padding-right:10px;
                flex-grow: 0;
                align-self: center;
            }
        }
    }
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


