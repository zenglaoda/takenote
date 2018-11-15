<template>
    <div class="blog-list">
        <div class="search-header">
            <div class="in-block">
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

            <div class="in-block">
                <el-cascader
                    placeholder="请选择分类"
                    clearable
                    :filterable="true"
                    :change-on-select="true"
                    :options="categoryList"
                    v-model="condition.cids"
                >
                </el-cascader>

            </div>

            <div class="in-block">
                <el-select v-model="condition.blogType"  placeholder="请选择文章类型">
                    <el-option
                    v-for="item in blogType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
            </div>

            <div class="in-block">
                <el-button type="primary" @click="filterSet('filter',null)">筛选</el-button>
                <el-button type="info" @click="filterSet('reset',null)">重置</el-button>
            </div>
        </div>

        <div class="list-box">
            <div class="list-pos list-shape" v-for="i in 13" :key="i">
                <div class="description description-shape">
                    大黑金卡实打实的哈桑等哈说离开打电话卡还是打算开店爱好的话奥克兰说的话卡号双等号
                </div>
                <ul class="info">
                    <li>标题 : 从你的全世界路过从你的全世界路过从你的全世界路过从你的全世界路过</li>
                    <li>分类 : 分类一,分类二,分类二,分类二,分类二</li>
                    <li>修改时间 : 2018-10-19</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <el-pagination
            @size-change="(num)=>{getPage('size',num)}"
            @current-change="(num)=>{getPage('page',num)}"
            :current-page="pageObj.currentPage"
            :page-sizes="[12,24,36,48]"
            :page-size="pageObj.size"
            :pager-count="pageObj.count"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageObj.total"
            background
        >
        </el-pagination>
        </div>
    </div>
</template>

<script>
import {blogType} from "@project/blog/config/static_data";
import http from "@/manage/http";
export default {
    data(){
        return {
            condition:{},
            categoryList:[],
            blogType:blogType,
            pageObj:{},
        };
    },
    methods:{

        filterSet(sym,page){

        },
        getPage(sym,num){

        },
        initPageObj(){
            this.pageObj = {
                size:12,                //每页显示的数量
                count:9,               //每页显示的按钮数
                total:400,              //总记录数
                currentPage:1           //当前页
            };
        },
        initCondition(){
            this.condition = {
                time:[],
                cids:[],
                blogType:blogType[0].id
            };

        },
    },
    mounted(){
        this.initCondition();
        this.initPageObj();
        http.getBlogList().then((res)=>{
            console.log(res);
        });
    }
}
</script>

<style lang="less" scoped>
    ul{
        margin: 0;
        list-style: none;
        padding: 0;
    }
    .in-block{
        display: inline-block;
        margin-bottom:15px;
    }
    .blog-list{
    }
    .list-box{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .list-shape{
            flex-flow: 1;
            flex-shrink: 1;
            height:220px;
            min-width: 200px;
            max-width: 300px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 8px 0 #ddd;
            cursor: pointer;
            margin-bottom:20px;
            transition: box-shadow 0.5s;
            &:hover{
                box-shadow: 0 0 10px 0 #999;            
            }
        }
        .list-pos{
            flex-grow: 1;
            .description{

            }
            .description-shape{
                color:#999;
                text-indent: 20px;
                height: 110px;
                padding-bottom: 10px;
            }
            .info{
                li{
                    padding: 5px 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap; 
                    color:#666;
                    &:last-child{
                        padding-bottom:10px;
                    }
                }
            }
        }
    }
</style>

