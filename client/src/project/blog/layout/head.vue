<template>
    <div class="box">
        <div class="label">
            一级分类 >> 二级分类
        </div>
        <div class="button">
            <el-button type="info">返回</el-button>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .box{
        height:60px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        padding: 0 10px;
        overflow: hidden;

        position: relative;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        &::after{
            content: '';
            width:100%;
            height:1px;
            box-shadow: 0 0 8px 0 #666;

            position: absolute;
            bottom: -1px;
        }
    }
</style>
<script>
export default {
    data(){
        return {

        };
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>


