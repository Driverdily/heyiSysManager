<template>
	<div>
		<!-- rfid通知号码 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/message.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="7">
				<span>{{$t('devSet.rfid.rfid_phone')}}</span>
			</el-col>
			<el-col :span="12">
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class=" align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>
		<!-- rfid  -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/system_66_gray.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="16">
				<span>{{$t('devSet.rfid.rfid_function')}}</span>
			</el-col>
			<el-col :span="8" class=" align-right">
				<el-select v-model="rfid_value" keep-alive size="mini" :placeholder="$t('commons.select')" style="width: 90%;">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				rfid_value: '', //RFID功能绑定值
				options: [{
					value: 0,
					label: this.$t('commons.arm')
				}, {
					value: 1,
					label: this.$t('commons.disarm')
				}, {
					value: 2,
					label: this.$t('commons.arm_disarm')
				}, ]
			}
		}
	}
</script>

<style>
</style>
