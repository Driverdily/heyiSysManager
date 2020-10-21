<template>

	<div class="header">
		<div class="header-left-box">
			<div class="header-logo">
				<img src="../../assets/img/bg_logo_s.png" title="LightYear" alt="LightYear" class="img-logo" />
			</div>
			<el-menu class="header-nav" mode="horizontal" text-color="#fff" background-color="#3060ff"
			 active-text-color="#fff" :default-active="this.$route.path" router>
				<el-menu-item index="/mainmap">
					<i class="el-icon-s-home"></i>
					<span slot="title">工作台</span>
				</el-menu-item>
				<el-menu-item index="/mainmap">
					<i class="el-icon-location"></i>
					<span slot="title">控制台</span>
				</el-menu-item>
				<el-menu-item index="/devstatus">
					<i class="el-icon-s-platform"></i>
					<span slot="title">设备状态</span>
				</el-menu-item>
				<el-menu-item index="/mainmap">
					<i class="el-icon-s-data"></i>
					<span slot="title">记录列表</span>
				</el-menu-item>
				<el-menu-item index="/mainmap">
					<i class="el-icon-d-caret"></i>
					<span slot="title">待用列表</span>
				</el-menu-item>
			</el-menu>
			
		</div>

		<div class="header-right-box">
			<el-dropdown trigger="hover" @command="handleCommand">
				<span class="el-dropdown-link">
					<img src="../../assets/img/login_title.png" />
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-user" command="/allmap">个人信息</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-plus">我的设置</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-plus-outline">修改密码</el-dropdown-item>
					<el-dropdown-item icon="el-icon-circle-check" divided>退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		
	</div>


</template>




<script>
	export default {
		data() {
			return {
				activeIndex: '2',
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			handleCommand(command) {
				this.$message('click on item ' + command);
				this.$router.push(command);
			}
		}

	}
</script>

<style>
	.header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		min-width: 1240;
		height: 72px;
		padding: 0 15px;
		background-color: #3060ff;
	}

	.header .header-left-box {
		display: flex;
		justify-content: flex-start;
	}

	.header .header-logo {
		position: relative;
	}

	.header .header-nav {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 16px;
		font-size: 14px;
		background-color: transparent;
		border-bottom: solid 1px #3060ff;
	}

	.header .header-nav .el-menu-item {
		display: list-item;
		margin-left: 10px;
		padding: 0 10px !important;
		height: 40px;
		line-height: 40px;
		border-radius: 15px;
	}

	.header .header-nav .el-menu-item.is-active {
		color: #3060ff !important;
		background-color: #fff !important;
	}

	.el-menu-item i {
		color: #fff;
	}

	.header .header-right-box {
		display: flex;
		justify-content: start;
		align-items: center;
		margin-right: 0;
	}

	.el-dropdown .el-dropdown-link {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.el-dropdown .el-dropdown-link img {
		border-radius: 50%;
		width: 40px;
		height: 40px;
		margin: 10px;
	}

	.el-dropdown .el-dropdown-link i {
		display: inline-block;
		color: white;
		font-size: 18sp !important;
	}
</style>
