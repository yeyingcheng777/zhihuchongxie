<template>
    <div class="home-right">
        <div class="container">
            <div class="card1">
                <table>
                    <tr>
                        <td><i class="fa fa-file-text-o fa-fw"></i></td>
                        <td> <i class="fa fa-edit fa-fw"></i></td>
                        <td> <i class="fa fa-lightbulb-o fa-fw"></i></td>
                    </tr>
                    <tr>
                        <td>写回答</td>
                        <td>写文章</td>
                        <td>写想法</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-video-camera fa-fw"></i></td>
                        <td> <i class="fa fa-history fa-fw"></i></td>
                        <td> <i class="fa fa-file  fa-fw"></i></td>
                    </tr>
                    <tr>
                        <td>发视频</td>
                        <td>稍后答</td>
                        <td>草稿箱</td>
                    </tr>
                </table>
            </div>
            <div class="card2">
                <div class="right1"><i class="fa fa-user-plus fa-fw"></i>创作者中心</div>
                <div class="right2">去开通<i class="fa fa-angle-right fa-fw"></i></div>
            </div>
            <div class="card3">
                <table>
                    <tr>
                        <td><i class="fa fa-bolt fa-fw" style="color: yellow;"></i></td>
                        <td><i class="fa fa-book fa-fw" style="color: green;"></i></td>
                        <td><i class="fa fa-yelp fa-fw" style="color: #0084ff;"></i></td>
                    </tr>
                    <tr>
                        <td>Live</td>
                        <td>书店</td>
                        <td>圆桌</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-pencil fa-fw"style="color: #0084ff;"></i></td>
                        <td><i class="fa fa-cny fa-fw"style="color: #0084ff;"></i></td>
                        <td><i class="fa fa-folder fa-fw"style="color: #0084ff;"></i></td>
                    </tr>
                    <tr>
                        <td>专栏</td>
                        <td>付费咨询</td>
                        <td>百科</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRight"
    }
</script>

<style lang="scss" scoped>
.home-right{
    padding: 0;
    margin: 15px;
    margin-left:0px;
    width:100%;
    min-height: 500px;

}
    .card1{
        width:300px;
        height: 160px;
        background:#fff;
        margin-left:-70px;
        margin-top: 5px;
      table>tr>td{
              height: 35px;
      }
    }
.card2{
    width:300px;
    height: 50px;
    background:#fff;
    margin-left:-70px;
    margin-top: 5px;
    display: flex;
    position: relative;
    .right1{
        margin:15px 10%;
    };
    .right2{
        margin:15px 11%;
        color: #0084ff;
    };
    }
.card3{
    width:300px;
    height: 160px;
    background:#fff;
    margin-left:-70px;
    margin-top: 5px;
    padding-bottom: 10px;
    table>tr>td{
        height: 30%;
        margin-bottom: 10px;
    }

}
i{
    color: #8590a6;
}
table{
    width: 100%;
    height: 100%;
};
td{
    width: 33%;
    height: 33%;
    text-align: center;
}
</style>
