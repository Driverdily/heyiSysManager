<template>
	<div>
		<el-row>
			<el-col :span="24">
				<el-table ref="singleTable" :data="maintainDate" stripe style="width: 100% ;height: 250px;overflow: scroll;" size="mini"
				 border>
					<el-table-column prop="time" :label="$t('declare_time')"></el-table-column>
					<el-table-column prop="content" :label="$t('fault_description')"></el-table-column>
					<el-table-column prop="result" :label="$t('maintain_result')"></el-table-column>
				</el-table>
			</el-col>
		</el-row>
		<!-- 时间 -->
		<el-row class="dev-set-list-item">
			<el-col :span="3" style="align-items: center;">

				<img src="../../../assets/img/clock1_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="10" >

				<span>{{$t('declare_time')}}</span>
			</el-col>
			<el-col :span="11" >
				<el-date-picker v-model="value3" type="datetime" :placeholder="$t('select_time')" size="mini" style="width: 90%;"
				 default-time="12:00:00">
				</el-date-picker>
			</el-col>
		</el-row>
		<!-- 故障描述 -->
		<el-row class="dev-set-list-item">
			<el-col :span="3" style="align-items: center;">

				<img src="../../../assets/img/seticon/guzhang.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="10" >

				<span>{{$t('fault_description')}}</span>
			</el-col>
			<el-col :span="11" >
				<el-input style="width: 90%;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
				</el-input>

			</el-col>

		</el-row>
		<!-- 提交 -->
		<el-row class="dev-set-list-item">
			<el-col :span="24" >
				<el-button type="infor" style="float: right;margin-right: 1.25rem;padding: 7px 25px;" size="mini">提交</el-button>
			</el-col>
		</el-row>




	</div>
</template>

<script>
	export default {
		data() {
			return {
				maintainDate: [{
						time: '2020-01-22 12:12',
						content: '描述问题的所在',
						result: '描述结果的啥问题的'
					}, {
						time: '2020-01-22 12:12',
						content: '描述问题的所在',
						result: '描述结果的啥问题的'
					}, {
						time: '2020-01-22 12:12',
						content: '描述问题的所在',
						result: '描述结果的啥问题的'
					}, {
						time: '2020-01-22 12:12',
						content: '描述问题的所在',
						result: '描述结果的啥问题的'
					},


				],
				form: {


				}
			}
		},
	}
</script>

<style scoped>

</style>
