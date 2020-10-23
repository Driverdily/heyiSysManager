<template>
	<div>
		<!-- 一键紧急报警灯 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/alarm_pictrue1.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="19">
				<span>{{$t('one_key_alarm')}}</span>
			</el-col>
			<el-col :span="3" class="align-right">
				<el-switch v-model="arm_voice_switch" active-color="#13ce66"></el-switch>
			</el-col>
		</el-row>
		<!-- 可编程继电器输出 -->
		<el-row class="dev-set-list-item  bg-gray">
			<el-col :span="24">
				<span class="fa-1x m-l-10 txt-bold ">{{$t('can_pro_relay_output')}}</span>
			</el-col>
		</el-row>
		<!-- 输出类型 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/smart_link_66_yellow.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11">
				<span>{{$t('output_type')}}</span>
			</el-col>
			<el-col :span="11" class="align-right">
				<el-select v-model="relay_output_type_value" keep-alive size="mini" :placeholder="$t('select')" style="width: 90%;">
					<el-option v-for="item in RelayOutputtypes" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 输出模式 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/heartbeat.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11">
				<span>{{$t('output_mode')}}</span>
			</el-col>
			<el-col :span="11" class="align-right">
				<el-select v-model="relay_output_mode_value" keep-alive size="mini" :placeholder="$t('select')" style="width: 90%;">
					<el-option v-for="item in RelayOutputmode" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 输出时间 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/clock_02_66_orange.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11">
				<span>{{$t('output_time')}}</span>
			</el-col>
			<el-col :span="11" class="align-right">
				<el-select v-model="relay_output_time_value" keep-alive size="mini" :placeholder="$t('select')" style="width: 90%;">
					<el-option v-for="i in 99" :key="i" :label="i" :value="i">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 可编程输出 -->
		<el-row class="dev-set-list-item  bg-gray">
			<el-col :span="24">
				<span class="fa-1x m-l-10 txt-bold ">{{$t('can_pro_output')}}</span>
			</el-col>
		</el-row>
		<!-- 输出类型 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/smart_link_66_yellow.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11">
				<span>{{$t('output_type')}}</span>
			</el-col>
			<el-col :span="11" class="align-right">
				<el-select v-model="output_type_value" keep-alive size="mini" :placeholder="$t('commons.select')" style="width: 90%;">
					<el-option v-for="item in RelayOutputtypes" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 输出模式 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/heartbeat.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11">
				<span>{{$t('output_mode')}}</span>
			</el-col>
			<el-col :span="11" class="align-right">
				<el-select v-model="output_mode_value" keep-alive size="mini" :placeholder="$t('select')" style="width: 90%;">
					<el-option v-for="item in RelayOutputmode" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<!-- 输出时间 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">
				<img src="../../../assets/img/seticon/clock_02_66_orange.png" class="dev-set-list-img">
			</el-col>
			<el-col :span="11">
				<span>{{$t('output_time')}}</span>
			</el-col>
			<el-col :span="11" class="align-right">
				<el-select v-model="output_time_value" keep-alive size="mini" :placeholder="$t('commons.select')" style="width: 90%;">
					<el-option v-for="i in 99" :key="i" :label="i" :value="i">
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
				relay_output_type_value: '3', //可编程继电器输出输出模式
				relay_output_mode_value: '0', //可编程继电器输出输出模式
				relay_output_time_value: '3', //可编程继电器输出输出时间
				output_type_value: '5', //可编程输出输出模式
				output_mode_value: '1', //可编程输出输出模式
				output_time_value: '12', //可编程输出输出时间

				RelayOutputtypes: [{
					value: '0',
					label: this.$t('relay_output_type_none')
				}, {
					value: '1',
					label: this.$t('relay_output_type_system')
				}, {
					value: '2',
					label: this.$t('relay_output_type_host')
				}, {
					value: '3',
					label: this.$t('relay_output_type_ac')
				}, {
					value: '4',
					label: this.$t('relay_output_type_lowpower')
				}, {
					value: '5',
					label: this.$t('relay_output_type_telephone')
				}, {
					value: '6',
					label: this.$t('relay_output_type_gsm')
				}, {
					value: '7',
					label: this.$t('relay_output_type_link')
				}, {
					value: '8',
					label: this.$t('relay_output_type_control')
				}, ],
				RelayOutputmode: [{
					value: '0',
					label: this.$t('mode_Impuls')
				}, {
					value: '1',
					label: this.$t('mode_Fortsetzung')
				}],

			}
		}
	}
</script>

<style>
</style>
