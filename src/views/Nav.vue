<template>
	 <div class="nav gutter">
		<div class="nav-bar">
			<ul class="nav-list flex-left">
				<li class="nav-item"> <router-link to="/home" class="zhihu" >知乎 </router-link></li>
				<li class="nav-item"><router-link to="/home"exact>首页</router-link></li>
				<li class="nav-item"><router-link to="/explore"exact>发现</router-link></li>
				<li class="nav-item"><router-link  to="/question/waiting"exact>等你来答</router-link></li>
				<li class="nav-item"><input type="search" placeholder="search"></li>
				<input type="button" value="提问">


			<div class="icon">
				<i class="fa fa-bell fa-2x"></i>
				<i class="fa fa-comments fa-2x"></i>
			</div>
				<li class="nav-item nav-item-last"><router-link to="/login"><img :src="user.avatar" v-if="token"
																				 style="width: 30px;height: 30px; border-radius: 5%;margin: -5px -20px"></router-link></li>
			</ul>
		</div>
		<!-- 二级路由入口 -->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		data() {
			return {
				flag:true,
				token:this.$store.state.token,
				user:this.$store.state.user
			};
		},
		created() {}
	};
</script>

<style lang="scss" scoped>
	/*引入SDN样式图标*/

	.gutter{
		background: #eee;
		position: relative;
		margin: 10px auto;

		.nav-bar{
			padding-bottom:5px;
			height: auto;
			margin: 3px 0px;
			height:40px;
			text-align: center;
			background: #fff;
			box-shadow: 0 1px 3px rgba(26,26,26,.1);
			width: 100%;
			.nav-list{
				position: relative;
				padding-left: 250px;
				height: 100%;
				margin-top: 10px;
				display: flex;
				width: 100%;
				.nav-item{
					margin-top: 10px;
					font-size: 15px;
					color:#8590a6;
					margin-left:40px;
					list-style-type: none;
					height: 35px;
					.zhihu{
						font-size: 30px;
						font-weight: normal;
						margin: -10px -50px;
						position: absolute;
						text-decoration: none;
						color:#0084ff;
					}


				}
				.nav-item:active{
					border-bottom: 3px solid blue;
				}
				.nav-item:visited{
					border-bottom: 3px solid blue;
				}

			}
		}
	}
	input[type = search]{
		border-radius: 4px ;
		margin-left: 60px;
		box-sizing: border-box;
		border: none;
		line-height: 35px;
		width: 300px;
		background: #eee;
		margin-top: -15px;
	}
	a{
		text-decoration: none;
		color: #999;
	}
	a:hover{
	 color: #444 ;
	}
	router-link {
		font-size: 20px;
		color: #8590a6;
		text-decoration: none;

	}
	.router-link-active{
		font-weight: 600;
		color: black;
	}

	.icon{
		margin: 10px 50px;
		i{
			color: #8590a6;
			margin-left:30px;
			font-size: 20px;
		}
	}
	input[type=button]{
		width: 60px;
		height: 35px;
		background: #0084ff;
		border: none;
		margin-left: 15px;
		border-radius: 4px;
		color: #fff;
	}

</style>
