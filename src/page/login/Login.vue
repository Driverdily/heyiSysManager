<template>
	<div class="login-box">
		<div class="login-page-container">
			<!-- 登录表单 -->
			<el-form class="demo-ruleForm login-container" label-position="left">
				<img src="../../assets/img/login_title.png" style="width: 300px; height: 100px" :fit="fit"></img>
				<el-form-item>
					<el-input prefix-icon="el-icon-user" type="text" :placeholder="$t('login.input_account')" v-model="ruleForm.username"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input prefix-icon="el-icon-lock" type="password" :placeholder="$t('login.input_pwd')" v-model="ruleForm.password"></el-input>
				</el-form-item>
				<el-checkbox style="float: left;margin-left: 10px; margin-bottom: 20px;" v-model="checked">{{$t('login.remember_pwd')}}</el-checkbox>
				<el-form-item>
					<el-button type="primary" style="width:100%;" @click="login" :loading="logining">{{$t('login.login')}}</el-button>
				</el-form-item>
				<el-form-item>

					<el-button type="text" @click="dialogResetPwdShow=true">{{$t('login.forget_pwd')}}</el-button>
					<el-button type="text" style="margin-left: 100px;" @click="dialogRegisterShow=true">{{$t('login.register')}}</el-button>
				</el-form-item>

			</el-form>
	

		</div>

		<!-- 重置密码对话框 -->
		<el-dialog :title="$t('login.reset_pwd')" :visible.sync="dialogResetPwdShow" width="500px" center append-to-body>
			<br />
			<el-form :model="Resetform">
				<el-form-item>
					<el-input type="text" v-model="Resetform.username" prefix-icon="el-icon-user" autocomplete="off" :placeholder="$t('login.input_account')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="email" v-model="Resetform.email" prefix-icon="el-icon-message" :placeholder="$t('login.input_email')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" v-model="Resetform.password" prefix-icon="el-icon-lock" :placeholder="$t('login.input_pwd')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width:70%;margin-left: 60px;" @click="resetPassword" :loading="reset_logining">{{$t('login.enter')}}</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<!-- 注册账号对话框 -->
		<el-dialog :title="$t('login.register')" :visible.sync="dialogRegisterShow" width="500px" center append-to-body>
			<br />
			<el-form :model="Registerform">
				<el-form-item>
					<el-input type="text" v-model="Registerform.username" prefix-icon="el-icon-user" autocomplete="off" :placeholder="$t('login.input_account')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="email" v-model="Registerform.email" prefix-icon="el-icon-message" :placeholder="$t('login.input_email')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" v-model="Registerform.password" prefix-icon="el-icon-lock" :placeholder="$t('login.input_pwd')">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width:70%;margin-left: 60px;" @click="Register" :loading="register_logining">{{$t('login.enter')}}</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				checked: '', //是否记住密码
				ruleForm: { //登录账号密码
					username: '',
					password: '',
				},
				dialogResetPwdShow: false, //显示重置密码对话框
				dialogRegisterShow: false, //注册账号对话框
				Resetform: { //重置密码对话框内容
					username: '',
					password: '',
					email: '',
				},
				Registerform: { //注册账号对话框
					username: '',
					password: '',
					email: '',
				},
				logining: false, //登录loading
				reset_logining: false, //重置密码对话框loading
				register_logining: false, //注册账号对话框loading
			


			}
		},
		methods: {
			login() {
				// this.logining = true;
				// // 模拟登录
				// setTimeout(() => {
				// 	// const params = {
				// 	// 	userName: this.ruleForm2.account,
				// 	// 	password: this.ruleForm2.checkPass
				// 	// };
				// 	// sessionStorage.setItem("user", JSON.stringify(params)); // session存储用户信息
				// 	if (this.$i18n.locale === 'zh') {
				// 		this.$i18n.locale = 'en'
				// 		localStorage.setItem('locale', 'en')
				// 	} else {
				// 		this.$i18n.locale = 'zh'
				// 		localStorage.setItem('locale', 'zh')
				// 	}
				// 	this.logining = false;

				// }, 2000);
				this.$router.push({
					path: "/main"
				});

			},
			resetPassword() {
				this.reset_logining = true;
				setTimeout(() => {
					// const params = {
					// 	userName: this.ruleForm2.account,
					// 	password: this.ruleForm2.checkPass
					// };
					// sessionStorage.setItem("user", JSON.stringify(params)); // session存储用户信息
					this.reset_logining = false;

				}, 2000);
			},
			Register() {
				this.register_logining = true;
				setTimeout(() => {
					// const params = {
					// 	userName: this.ruleForm2.account,
					// 	password: this.ruleForm2.checkPass
					// };
					// sessionStorage.setItem("user", JSON.stringify(params)); // session存储用户信息
					this.register_logining = false;
					

				}, 2000);
			},
		}
	}
</script>

<style scoped>
	.login-box {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-image: url(../../assets/img/bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%; 
	}

	.login-container {
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		width: 350px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -200px;
		margin-top: -200px;
		padding: 35px 35px 15px;
		background: white;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 10px #cac6c6;
	}
</style>
