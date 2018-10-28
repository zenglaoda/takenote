<template>
    <div class="aside-pos aside-shape">
        <ul class="grade-pos grade-shape ul-reset">
            <li v-for="(item,index) in asideList" :key="index">
                <div class="label-pos label-shape">
                    {{item['label']}}
                </div>
            </li>
        </ul>
        <ul class="sec-pos sec-shape ul-reset">
            <div class="label-pos label-shape label-head">
                一级分类
            </div>
            <div class="label-pos label-shape">
                二级分类
            </div>      
        </ul>
    </div>
</template>
<style lang="less" scoped>
//  1em=16px,12px=0.75em,10px=0.625em;
    .ul-reset{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    //侧边容器
    .aside-pos{
        position: relative;
        display: flex;
        left:0px;
        top:0;
    }
    .aside-shape{
        height: 100%;
        font-size:1em;
    }


    //一级导航
    .grade-pos{
        // position: absolute;
    }
    .grade-shape{
        background-color: #f2f2f2;
        cursor: pointer;
        border:1px solid #999;        
        height:100%;
        flex-basis: 50%;
    }

    //导航标签
    .label-pos{
        padding-left:10px;
        padding-right:5px;
        display: flex;
        align-items: center;
    }
    .label-shape{
        height:2.5em;
        border-bottom:1px solid #999;
    }
    .label-head{
        height:60px;
    }

    //二级导航
    .sec-pos{
        // position: absolute;
    }
    .sec-shape{
        flex-grow: 1;
        height:100%;
        background-color: #ddd;
        border:1px solid #999;
        cursor: pointer;
    }
</style>
<script>
export default {
    data(){
        return {
            asideList:[
                {label:'vue',id:0,child:[{label:'vue-loader',id:0}]},
                {label:'vue',id:0,child:[{label:'vue-loader',id:0}]},
                {label:'vue',id:0,child:[{label:'vue-loader',id:0}]},
                {label:'vue',id:0,child:[{label:'vue-loader',id:0}]},
            ]
        };
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>


