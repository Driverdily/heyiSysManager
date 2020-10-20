<template>
	<div>
		<!-- 内置警号 -->
		<el-row class="dev-set-list-item  bg-gray">
			<el-col :span="24" >
				<span class="fa-1x m-l-10 txt-bold ">{{$t('devSet.siren.inside_siren')}}</span>
			</el-col>
		</el-row>
		<!-- 警号音量 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/siren1_66_red.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('devSet.siren.siren_volume')}}</span>
			</el-col>
			<el-col :span="2">
				<span>0-15</span>
			</el-col>
			<el-col :span="6" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>

		<!-- 报警时长 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/clock1_66_gray.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11" >
				<span>{{$t('devSet.siren.alarm_duration')}}</span>
			</el-col>
			<el-col :span="2">
				<span>0-255</span>
			</el-col>
			<el-col :span="6" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>

		<!-- 紧急键 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/volume_66_gray.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="15" >
				<span>{{$t('devSet.siren.arm_voice_choose')}}</span>
			</el-col>
			<el-col :span="7" class="align-right">
				<el-select v-model="alarm_value" keep-alive size="mini" :placeholder="$t('commons.select')" style="width: 90%;">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 外接警号 -->
		<el-row class="dev-set-list-item  bg-gray">
			<el-col :span="24" >
				<span class="fa-1x m-l-10 txt-bold ">{{$t('devSet.siren.outside_siren')}}</span>
			</el-col>
		</el-row>
		<!-- 布撤防提示音 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/arm_66_red.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="19" >
				<span>{{$t('devSet.siren.arm_disarm_tone')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-switch v-model="arm_voice_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- 启用无线警号 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/alarm_66_red.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="19" >
				<span>{{$t('devSet.siren.open_wireless_siren')}}</span>
			</el-col>
			<el-col :span="3" class="align-right" >
				<el-switch v-model="arm_voice_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- 警号地址 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/siren_local.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="8" >
				<span>{{$t('devSet.siren.alarm_duration')}}</span>
			</el-col>
			<el-col :span="6">
				<span>00000000-99999999</span>
			</el-col>
			<el-col :span="5" >
				<el-input size="mini"></el-input>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-button type="infor" size="mini" style="margin-left: 5px;">{{$t('commons.change')}}</el-button>
			</el-col>

		</el-row>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				alarm_value: '', //报警声选择绑定值
				arm_voice_switch: true, //布撤防提示音开关
				options: [{
					value: 0,
					label: this.$t('devSet.siren.alarm_volume')
				}, {
					value: 1,
					label: this.$t('devSet.siren.alarm_fire')
				}, {
					value: 2,
					label: this.$t('devSet.siren.alarm_medical')
				}, {
					value: 3,
					label: this.$t('devSet.siren.alarm_air')
				}, {
					value: 4,
					label: this.$t('devSet.siren.alarm_110')
				}],
			}
		}
	}
</script>

<style>
</style>
