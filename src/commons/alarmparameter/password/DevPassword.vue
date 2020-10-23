<template>
	<div>
		<!-- 编程密码 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/lock_66_yellow.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('program_pwd')}}</span>
			</el-col>
			<el-col :span="8" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('change')}}</el-button>
			</el-col>
		
		</el-row>
		<!-- 用户密码 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/lock_66_yellow.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('user_pwd')}}</span>
			</el-col>
			<el-col :span="8" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('change')}}</el-button>
			</el-col>
		
		</el-row>
		<!-- 挟持布防 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/lock_66_yellow.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('duress_pwd')}}</span>
			</el-col>
			<el-col :span="8" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('change')}}</el-button>
			</el-col>
		
		</el-row>


	</div>
</template>

<script>
</script>

<style>
</style>
