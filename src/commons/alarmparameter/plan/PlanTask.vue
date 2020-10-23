<template>
	<div style="background-color: white;">
		<div class="box-card" v-for="item in options" :key='item.stateID'>
			<span class="box-title">计划任务 1</span>
			<el-row>
				<el-col :span="20">
					<!-- 星期 -->
					<el-row>
						<el-col :span="2" style="align-items: center;">
							<img src="../../../assets/img/seticon/repeat_66_blue.png" class="dev-set-list-img">
						</el-col>
						<el-col :span="6">
							<span>{{$t('week')}}</span>
						</el-col>
						<el-col :span="15" style="text-align: right;">
							<el-checkbox-group v-model="checkboxGroup1" size="mini">
								<el-checkbox v-for="item in weeks" :label='item' :key='item'></el-checkbox>
							</el-checkbox-group>
						</el-col>

					</el-row>
					<el-row>
						<el-col :span="2" style="align-items: center;">
							<img src="../../../assets/img/seticon/arm_66_red.png" class="dev-set-list-img">
						</el-col>
						<el-col :span="12">
							<span>{{$t('arm_time')}}</span>
						</el-col>
						<el-col :span="10">
							<el-time-picker :v-model="item.startTime" :picker-options="{selectableRange:'00:00:00 - 23:59:59'}" size="mini" style="width: 95%;">
							</el-time-picker>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="2" style="align-items: center;">
							<img src="../../../assets/img/seticon/disarm_66_red.png" class="dev-set-list-img">
						</el-col>
						<el-col :span="12">
							<span>{{$t('disarm_time')}}</span>
						</el-col>
						<el-col :span="10">
							<el-time-picker :v-model="item.endTime" :picker-options="{selectableRange:'00:00:00 - 23:59:59'}" size="mini" style="width: 95%;">
							</el-time-picker>
						</el-col>
					</el-row>
				</el-col>
				<el-col :span="4" style="height: 100%;text-align: center;">
					<el-switch v-model="item.switch" active-color="#13ce66"></el-switch>
					<br /><br />
					<el-button type="infor" size="mini" style="">提交</el-button>
				</el-col>
			</el-row>

		</div>


	</div>

</template>

<script>
	export default {
		data() {
			return {
				start_arm_time1: '', //开始时间选择器
				end_disarm_time: '',
				checkboxGroup1: [],
				options: [{
					stateID: '1',
					startTime: '12:00:00',
					endTime: '13:11:12',
					switch: true,
				}, {
					stateID: '2',
					startTime: '2:00:00',
					endTime: '13:11:12',
					switch: false,
				}, {
					stateID: '3',
					startTime: '2:00:00',
					endTime: '14:11:12',
					switch: true,
				}, {
					stateID: '4',
					startTime: '08:00:00',
					endTime: '14:11:12',
					switch: true,
				}, ],
				weeks: ['1', '2', '3', '4', '5', '6', '7'],
			}
		}
	}
</script>

<style scoped>
	.box-card {
		margin: 20px 10px 10px;
		border: 0.5px solid lightgray;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		width: 95%;
		padding: 10px;
	}

	.box-card .box-title {
		position: relative;
		width: auto;
		top: -19px;
		left: 15px;
		background-color: white;

	}

	.el-checkbox {
		margin-right: 5px !important;
	}
</style>
