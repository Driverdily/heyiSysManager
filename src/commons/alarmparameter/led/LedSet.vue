<template>
	<div>
		<!-- 名称 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/position.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="7">
				<span>{{$t('devSet.led.name')}}</span>
			</el-col>
			<el-col :span="12">
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class=" align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>
		<!-- 待机内容 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/standby.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="7">
				<span>{{$t('devSet.led.standby_content')}}</span>
			</el-col>
			<el-col :span="12">
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class=" align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>
	</div>
</template>

<script>
</script>

<style>
</style>
