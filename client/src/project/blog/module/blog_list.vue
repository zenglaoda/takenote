<template>
    <div class="blog-list">
        <div class="search-header">
            <el-date-picker
                v-model="condition.time"
                type="daterange"
                align="right"
                :unlink-panels="false"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            >
            </el-date-picker>
            
        </div>

    </div>
</template>
<style lang="less" scoped>
    .in-block{
        display: inline-block;
        margin-bottom:15px;
    }
    .blog-list{
    }
</style>
<script>
export default {
    data(){
        return {
            condition:{},

        };
    },
    methods:{
        initCondition(){
            this.condition = {
                time:[],
            };
        },
    },
    mounted(){
        
    }
}
</script>


