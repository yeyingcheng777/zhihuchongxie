<template>
    <div id="home-header">
      <div class="home-nav">
          <ul class="home-nav-ul">
              <li class="home-nav-item">推荐</li>
              <li class="home-nav-item">关注</li>
              <li class="home-nav-item">热榜</li>
          </ul>
      </div>
    </div>

</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
#home-header{
    width: 100%;
    height:50px;
    background:#fff;
    border-bottom: 1px solid #eee;
    margin-top: 3px;
}
.home-nav-ul{
    display: flex;
    width:100%;
    height: 50px;
}
    .home-nav-item{
        list-style-type: none;
        margin: 20px 20px;
        color: #000;
    }

</style>
