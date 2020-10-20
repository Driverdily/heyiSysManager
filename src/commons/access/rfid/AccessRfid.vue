<template>
	<div>
		<el-row style="height: 530px;border: 1px solid gray;margin: 1px;">

			<el-col :span="8" style="height: 100%; overflow: scroll;">

				<el-table ref="singleTable" :data="RfidList" style="width: 100% ;" size="mini" highlight-current-row
				 @current-change="handleCurrentChange">
					<el-table-column width="40px">
						<template slot-scope="scope">
							<img src="../../../assets/img/access/frid_pic_132.png" alt="" class="table-img" />
						</template>
					</el-table-column>
					<el-table-column prop="label" :label="$t('access.zones')"></el-table-column>
					<el-table-column prop="value" :label="$t('commons.serial_no')" width="50px"></el-table-column>
					<el-table-column property="Switch" :label="$t('access.zone.enrolling')" width="70px">
						<template slot-scope="scope">
							<img v-show="scope.row.Switch" src="../../../assets/img/access/checkmark_66.png" alt="" class="table-img" />
						</template>
					</el-table-column>
				</el-table>

			</el-col>

			<el-col :span="16">
				<!-- 刷卡通知内容 -->
				<el-row class="dev-set-list-item">
					<el-col :span="2" style="align-items: center;">
						<img src="../../../assets/img/access/sms_66_blue.png" class="dev-set-list-img">
					</el-col>
					<el-col :span="11">
						<span>{{$t('access.rfid.push_content')}}</span>
					</el-col>
					<el-col :span="8">
						<el-input size="mini"></el-input>
					</el-col>
					<el-col :span="3" class="align-right">
						<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('commons.change')}}</el-button>
					</el-col>
				</el-row>

				<div style="margin-top: 100px;text-align: center;">
					<el-button type="infor" style="padding: 10px 95px;" size="mini">{{$t('access.zone.enrolling')}}</el-button>
					<br />
					<el-button type="infor" style="padding: 10px 80px;" size="mini">{{$t('access.zone.re_code')}}</el-button>
					<br />
					<el-button type="infor" style="padding: 10px 80px;" size="mini">{{$t('access.zone.delete_code')}}</el-button>
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				RfidList: [{
						value: '1',
						label: 'RFID 1',
						Switch: false
					},
					{
						value: '2',
						label: 'RFID 2',
						Switch: true
					},
					{
						value: '3',
						label: 'RFID 3',
						Switch: false
					},
					{
						value: '4',
						label: 'RFID 4',
						Switch: true
					},
					{
						value: '5',
						label: 'RFID 5',
						Switch: false
					}, {
						value: '6',
						label: 'RFID 6',
						Switch: true
					},
					{
						value: '7',
						label: 'RFID 7',
						Switch: false
					}, {
						value: '8',
						label: 'RFID 8',
						Switch: true
					},

				]
			}
		}
	}
</script>

<style scoped>
	.table-img {
		min-width: 24px;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 12px;
		font-size: 32px;
	}
</style>
