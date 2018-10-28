<template>
    <div class="framework">
        <div class="nav-pos nav-shape">
            logo放置处
        </div>

        <div class="main-pos main-shape">
            <div class="side-left-pos side-left-shape">
                <sidebar></sidebar>
                <!-- <router-view name="sidebar"></router-view> -->
            </div>

            <div class="side-right-pos side-right-shape">
                <content-head></content-head>
                <router-view class="content"></router-view>
                <!-- <router-view name="head"></router-view> -->
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .framework{
        height: 100%;
        padding-top:60px;
        position: relative;  

        //页面顶部
        .nav-pos{
            position: absolute;
            top:0;
        }
        .nav-shape{
            border-bottom:1px solid #ccc;
            height:60px;
            width:100%;
            background-color: #f2f2f2;            
        }

        //页面底部
        .main-pos{
            position: relative;           
            display: flex;
        }
        .main-shape{
            height:100%;
        }

        //底部左边导航
        .side-left-pos{

        }
        .side-left-shape{
            flex-grow: 0;
            flex-basis: 300px;
        }

        //底部右边内容部分
        .side-right-shape{
            flex-grow: 1;
        }
        .side-right-pos{

        }

        .content{
            padding-top:15px;
            padding-left:15px;
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
        
    },
    components:{
        sidebar:()=> import(/*webpack chunkName 'sidebar'*/'@project/blog/layout/sidebar'),
        contentHead:()=> import(/*webpack chunkName 'head'*/'@project/blog/layout/head')
    }
}
</script>


