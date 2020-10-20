<template>
	<div>
		<!-- 网络参数设置 -->
		<el-row class="dev-set-list-item-mini  bg-gray">
			<el-col :span="2">
				<img src="../../../assets/img/seticon/timezone_66_green.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="17">
				<span class="fa-1-2x  txt-bold ">{{$t('devSet.siaip.net_set')}}</span>
			</el-col>
			<el-col :span="2">
				<img src="../../../assets/img/seticon/download.png" class="dev-set-list-img align-right">
			</el-col>
			<el-col :span="3">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>
		</el-row>
		<!-- 开关 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="19">
				<span>{{$t('commons.open_close')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-switch v-model="net_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- 网络通道 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="10">
				<span>{{$t('devSet.cms.net_aisle')}}</span>
			</el-col>
			<el-col :span="12" class="align-right">
				<el-radio v-model="radio" label="1">LAN/GPRS</el-radio>
				<el-radio v-model="radio" label="2">LAN</el-radio>
				<el-radio v-model="radio" label="3">GPRS</el-radio>
			</el-col>
		</el-row>
		<!-- 连接类型 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="10">
				<span>{{$t('devSet.siaip.link_type')}}</span>
			</el-col>
			<el-col :span="12" class="align-right">
				<el-radio v-model="radio" label="1">TCP</el-radio>
				<el-radio v-model="radio" label="2">UDP</el-radio>
			</el-col>
		</el-row>
		<!-- 连接路径 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="10">
				<span>{{$t('devSet.siaip.link_path')}}</span>
			</el-col>
			<el-col :span="12" class="align-right">
				<el-radio v-model="radio" label="1">IP</el-radio>
				<el-radio v-model="radio" label="2">DNS</el-radio>
			</el-col>
		</el-row>
		<!-- 域名 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="11">
				<span>{{$t('devSet.siaip.domain_name')}}</span>
			</el-col>
			<el-col :span="11">
				<el-input size='mini'></el-input>
			</el-col>
		</el-row>
		<!-- 端口 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="11">
				<span>{{$t('devSet.cms.port')}}</span>
			</el-col>
			<el-col :span="11">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- 协议设置 -->
		<el-row class="dev-set-list-item-mini  bg-gray">
			<el-col :span="2">
				<img src="../../../assets/img/seticon/smart_link_66_yellow.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="17">
				<span class="fa-1-2x  txt-bold ">{{$t('devSet.siaip.protocol_set')}}</span>
			</el-col>
			<el-col :span="2">
				<img src="../../../assets/img/seticon/download.png" class="dev-set-list-img align-right">
			</el-col>
			<el-col :span="3">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>
		</el-row>
		<!-- 协议类型 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="14">
				<span>{{$t('devSet.siaip.protocol_type')}}</span>
			</el-col>
			<el-col :span="8" class="align-right">
				<span class="txt-blue">ADM-CID</span>
			</el-col>
		</el-row>
		<!-- 用户账号 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="11">
				<span>{{$t('devSet.cms.account')}}</span>
			</el-col>
			<el-col :span="11">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- 用户前缀 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="11">
				<span>{{$t('devSet.siaip.account_prefix')}}</span>
			</el-col>
			<el-col :span="1">
				<span style="color: red;">L</span>
			</el-col>
			<el-col :span="10">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- 接收方号码 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="11">
				<span>{{$t('devSet.siaip.receive_number')}}</span>
			</el-col>
			<el-col :span="1">
				<span style="color: red;">R</span>
			</el-col>
			<el-col :span="10">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- aes 128位加密 -->
		<el-row class="dev-set-list-item-mini  bg-gray">
			<el-col :span="2">
				<img src="../../../assets/img/seticon/arm_66_red.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="17">
				<span class="fa-1-2x  txt-bold ">{{$t('devSet.siaip.aes_128key')}}</span>
			</el-col>
			<el-col :span="2">
				<img src="../../../assets/img/seticon/download.png" class="dev-set-list-img align-right">
			</el-col>
			<el-col :span="3">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>
		</el-row>
		<!-- 开关 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="19">
				<span>{{$t('commons.open_close')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-switch v-model="net_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- AES 128位加密 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="6">
				<span>{{$t('devSet.siaip.account_prefix')}}</span>
			</el-col>
			<el-col :span="6" class="align-right">
				<el-radio v-model="radio" label="1">ASCII</el-radio>
				<el-radio v-model="radio" label="2">HEX</el-radio>
			</el-col>

			<el-col :span="10">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- 定时监测 -->
		<el-row class="dev-set-list-item-mini  bg-gray">
			<el-col :span="2">
				<img src="../../../assets/img/seticon/arm_clock_66_green.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="17">
				<span class="fa-1-2x  txt-bold ">{{$t('devSet.siaip.time_monitor')}}</span>
			</el-col>
			<el-col :span="2">
				<img src="../../../assets/img/seticon/download.png" class="dev-set-list-img align-right">
			</el-col>
			<el-col :span="3">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>
		</el-row>
		<!-- 开关 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="19">
				<span>{{$t('commons.open_close')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-switch v-model="net_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- 监测间隔 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="11">
				<span>{{$t('devSet.siaip.monitor_interval')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<span style="color: red;">1-65535</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>
		<!-- 重传 -->
		<el-row class="dev-set-list-item-mini  bg-gray">
			<el-col :span="2">
				<img src="../../../assets/img/seticon/ota_66_red.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="17">
				<span class="fa-1-2x  txt-bold ">{{$t('devSet.siaip.retransmission')}}</span>
			</el-col>
			<el-col :span="2">
				<img src="../../../assets/img/seticon/download.png" class="dev-set-list-img align-right">
			</el-col>
			<el-col :span="3">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>
		</el-row>
		<!-- 监测间隔 -->
		<el-row class="dev-set-list-item-mini">
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="5">
				<span>{{$t('devSet.siaip.retransmission_times')}}</span>
			</el-col>
			<el-col :span="5">
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="2" style="align-items: center;">
			</el-col>
			<el-col :span="5">
				<span>{{$t('devSet.siaip.retransmission_interval')}}</span>
			</el-col>
			<el-col :span="5">
				<el-input size="mini"></el-input>
			</el-col>
		</el-row>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				net_switch: true, //网络参数开关
			}
		}
	}
</script>

<style>


</style>
