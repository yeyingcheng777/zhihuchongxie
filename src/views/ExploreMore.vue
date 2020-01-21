<template>
    <div id="explore-more">

        <div class="container">
            <div class="header">
                <div class="header1">圆桌</div>
                <div class="header2">举办圆桌</div>
            </div>
            <tr class="row" >
                <div class="content" v-for="(roundTable,index) in roundTables" :key="index">
                    <td class="col-4" >
                        <img :src="roundTable.banner" alt="">
                        <div class="top">{{ roundTable.name }}</div>
                        <p class="meta">该圆桌被{{ roundTable.includeCount }}次浏览</p>

                    </td>

                </div>
            </tr>

        </div>
    </div>
</template>

<script>
    export default {
        name: "explore-more",
        data(){
            return {
             roundTables:[]
            }
        },
        created() {
            this.axios.get('http://localhost:8080/api/roundTables/all').then(res => {
                console.log(res);
                this.roundTables = res.data.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
.header{
    width: 800px;
    height: 40px;
    background:#fff;
    padding-left:20%;
    padding-top:15px;
    margin-top: 0;
   display: flex;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    .header1{
        margin-left: -170px;
    }
    .header2{
        color:#0084ff ;
        margin-left: 850px;
    }
}

.container{
    width: 67%;
    background: #fff;
    margin-top: 10px;
}


.content{
    display: flex;
    min-height:100px;
    background: #fff;
    width: 20%;
     height: 260px;
    margin-top:10px;
    margin-left:40px;
    float: left;
}
.bottom {
    margin-top: 0;
    scroll-padding: 20px;
}
.top{
    width: 700px;
    display: flex;
    margin-top: -40px;
    text-align: center;
    word-break: break-all;word-wrap: break-word;
    height: 20%;
    color: #fff;
}
.meta {
    color: #8590a6;
    font-size: 13px;
    margin-top: -10px;
}


.col-4 {
    width: 100%;
    height: 100%;
}
img{
    width: 100%;
    height: 80%;
    border-radius: 5px;
}

    .row{
        width: 100%;
    }


</style>
