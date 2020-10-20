<template>
	<div>
		<!-- 号码列表 -->
		<el-row>
			<el-col :span="24" >
				<el-table ref="singleTable" :data="phoneDate" stripe style="width: 100% ;" size="mini" highlight-current-row
				 @current-change="handleCurrentChange" border  :cell-style="{padding: '0'}">
					<el-table-column prop="serial" :label="$t('commons.serial_no')"></el-table-column>
					<el-table-column prop="name" :label="$t('commons.name')"></el-table-column>
					<el-table-column prop="phone" :label="$t('devSet.alarmphone.phone')"></el-table-column>
					<el-table-column prop="sms" :label="$t('devSet.alarmphone.send_sms')"></el-table-column>
					<el-table-column prop="callphone" :label="$t('devSet.alarmphone.call_phone')"></el-table-column>
				</el-table>
			</el-col>
		</el-row>

		<!-- 电话名称输入 -->
		<el-row style="margin-top: 40px;display: flex;align-items: center;padding: 5px 10px;">
			<el-col :offset="3" :span="3">
				<span>{{$t('devSet.alarmphone.phone_name')}}</span>
			</el-col>
			<el-col :offset="1" :span="10">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>

		<!-- 电话号码输入 -->
		<el-row style="display: flex;align-items: center;padding: 5px 10px;">
			<el-col :offset="3" :span="3">
				<span>{{$t('devSet.alarmphone.phone_number')}}</span>
			</el-col>
			<el-col :offset="1" :span="10">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- 可拨打电话 可发送短信 check框 -->
		<el-row style="display: flex;align-items: center;padding: 5px 10px;margin-top: 10px;">

			<el-col :offset="7" :span="10">
				<el-checkbox v-model="checked1">{{$t('devSet.alarmphone.call_phone')}}</el-checkbox>
				<el-checkbox v-model="checked2">{{$t('devSet.alarmphone.send_sms')}}</el-checkbox>

			</el-col>
		</el-row>

		<!-- 发送按钮 -->
		<el-row style="display: flex;align-items: center;padding: 5px 10px;margin-top: 20px;">

			<el-col :offset="7" :span="10">
				<el-button type="primary" style="width: 250px;">{{$t('commons.save')}}</el-button>
			</el-col>
		</el-row>
		<!-- 文字描述 -->
		<el-row style="display: flex;align-items: center;padding: 5px 10px;margin-top: 10px;">

			<el-col :offset="8" :span="7">
				{{$t('devSet.alarmphone.lost_sms')}}

			</el-col>
			<el-col :span="3">
				<span style="font-weight: 450;color: darkred;">12</span>
			</el-col>

		</el-row>
		<el-row style="display: flex;align-items: center;padding: 5px 10px;">

			<el-col :offset="8" :span="7">
				{{$t('devSet.alarmphone.lost_phone')}}

			</el-col>
			<el-col :span="3">
				<span style="font-weight: 450;color: darkred;">24</span>
			</el-col>

		</el-row>
		<!-- 运营商限制 -->
		<el-row style="display: flex;align-items: center;padding: 5px 10px;margin-top: 20px;">

			<el-col :offset="3" :span="21">
				<span>{{$t('devSet.alarmphone.tips_title')}}</span>
			</el-col>
		</el-row>
		<el-row style="display: flex;align-items: center;padding: 5px 10px;">

			<el-col :offset="4" :span="20">
				<span>{{$t('devSet.alarmphone.tips_one')}}</span>
			</el-col>
		</el-row>
		<!-- 运营商限制 -->
		<el-row style="display: flex;align-items: center;padding: 5px 10px;">

			<el-col :offset="4" :span="20">
				<span>{{$t('devSet.alarmphone.tips_two')}}</span>
			</el-col>
		</el-row>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				phoneDate: [{
						'serial': 1,
						'name': '电话1',
						'phone': 1232131,
						'sms': '',
						'callphone': 12312,
					},
					{
						'serial': 2,
						'name': '电话2',
						'phone': '',
						'sms': '',
						'callphone': '',
					},
					{
						'serial': 3,
						'name': '电话3',
						'phone': '',
						'sms': '',
						'callphone': '',
					},
					{
						'serial': 4,
						'name': '电话4',
						'phone': '',
						'sms': '',
						'callphone': '',
					},
					{
						'serial': 5,
						'name': '电话5',
						'phone': '',
						'sms': '',
						'callphone': '',
					},
					{
						'serial': 6,
						'name': '电话6',
						'phone': '',
						'sms': '',
						'callphone': '',
					},
					{
						'serial': 7,
						'name': '电话7',
						'phone': '',
						'sms': '',
						'callphone': '',
					},
					{
						'serial': 8,
						'name': '电话8',
						'phone': '',
						'sms': '',
						'callphone': '',
					}

				],
				currentRow: 1,
				form: {
					serial: '',
					name: '',
					phone: '',
					'sms': '',
					'callphone': ''
				},




			}
		},
		methods: {
			handleCurrentChange(val) {
				this.currentRow = val;
			}
		}

	}
</script>

<style >
/* 	.el-table__row td {
		padding: 0 !important;
		font-size: 10px !important;
	} */
</style>
