<template>
<div>
	<!-- 提示 -->
	<el-row class="dev-set-list-item  bg-gray">
		<el-col :span="24" >
			<span class="fa-1x m-l-10 txt-bold ">{{$t('devSet.reset.tips')}}</span>
		</el-col>
	</el-row>
	<!-- 温度 -->
	<el-row class="dev-set-list-item">
		<el-col :span="2" style="align-items: center;">
			<img src="../../../assets/img/seticon/reset_66_red.png" class="dev-set-list-img">
		</el-col>
		<el-col :span="14" >
			<span>{{$t('devSet.reset.reset')}}</span>
		</el-col>
		<el-col :span="8" class="align-right" >
			<el-button type="infor" size="mini">{{$t('devSet.reset.reset')}}</el-button>
		</el-col>
	</el-row>
	
</div>
</template>

<script>
</script>

<style>
</style>
