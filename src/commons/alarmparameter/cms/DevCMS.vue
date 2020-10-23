<template>
	<div>
		<!-- 开关 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/switch_66_gray.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="19" >
				<span>{{$t('switch')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-switch v-model="cms_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- 网络通道 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/accesspoint_66.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="15" >
				<span>{{$t('net_aisle')}}</span>
			</el-col>
			<el-col :span="7" class="align-right">
				<el-select v-model="net_aisle_value" keep-alive size="mini" :placeholder="$t('commons.select')" style="width: 90%;">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 用户账号 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/user_66_gray.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('account')}}</span>
			</el-col>
			<el-col :span="8" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>
		<!-- IP地址 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/ip_66_gray.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('ip_address')}}</span>
			</el-col>
			<el-col :span="8" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" style="margin-left: 5px;" size="mini">{{$t('change')}}</el-button>
			</el-col>
		
		</el-row>
		<!-- 端口 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/port_66.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('port')}}</span>
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
	export default {
		data() {
			return {
				cms_switch: true,
				net_aisle_value: '', //网络通道类型
				options: [{
					value: 0,
					label: 'Lan & GPRS'
				}, {
					value: 1,
					label: 'Lan'
				}, {
					value: 2,
					label: 'GPRS'
				}],
			}
		}
	}
</script>

<style>
</style>
