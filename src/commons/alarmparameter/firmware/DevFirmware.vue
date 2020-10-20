<template>
	<div>
		<!-- 当前固件版本 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/firmware_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.firmware.this_version')}}</span>
			</el-col>
			<el-col :span="8" class=" align-right">
				<span class="txt-blue">设备当前固件版本</span>
			</el-col>
		</el-row>
		<!-- 可升级版本 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/info_66_blue.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.firmware.new_version')}}</span>
			</el-col>
			<el-col :span="8" class="align-right">
				<span class="txt-blue">设备可升级固件版本</span>
			</el-col>
		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/monitor_progress_waite.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="6">

				<span>{{$t('devSet.firmware_update')}}</span>
			</el-col>
			<el-col :span="12" class="align-left" v-show="isUpdate">
				<el-progress  :text-inside="true" :stroke-width="15" :percentage="99" >

				</el-progress>

			</el-col>
			<el-col :span="4" class="align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('devSet.firmware.run_update')}}</el-button>
			</el-col>
		</el-row>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				isUpdate: true,
			}
		}
	}
</script>

<style>
</style>
