<template>
	<el-dialog :visible.sync="visible" customClass="h-80" title="设备名称(待)" :close-on-press-escape="false"
	 :close-on-click-modal="false" append-to-body :before-close="handleClose">
		<div>
			<el-tabs tab-position="left" type="card" style="border-top: 1px solid gray;">
				<el-tab-pane>
					<!-- 设备信息 -->
					<span slot="label"><i class="iconfont icon-adjust" style="color: red;"></i>&nbsp;
						{{$t('devSet.dev_information')}}</span>
					<dev-informations></dev-informations>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 时间设置 -->
					<span slot="label"><i class="iconfont icon-shijian" style="color: gray;"></i>&nbsp;
						{{$t('devSet.time_set')}} </span>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 报警设置 -->
					<span slot="label"><i class="iconfont icon-baojing" style="color: red;"></i>&nbsp;
						{{$t('devSet.alarm_set')}}

					</span>
					<dev-alarm></dev-alarm>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 密码设置 -->
					<span slot="label"><i class="iconfont icon-mima" style="color:yellow;"></i>&nbsp;
						{{$t('devSet.pwd_set')}} </span>
					<dev-password></dev-password>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 声音设置 -->
					<span slot="label"><i class="iconfont icon-laba" style="color:#2E2E2E;"></i>&nbsp; {{$t('devSet.voice_set')}}
					</span>
					<dev-siren></dev-siren>
				</el-tab-pane>

				<el-tab-pane>
					<!-- CMS设置 -->
					<span slot="label"><i class="iconfont icon-zhexian" style="color:green;"></i>&nbsp; {{$t('devSet.cms_set')}}
					</span>
					<dev-cms></dev-cms>
				</el-tab-pane>

				<el-tab-pane>
					<!-- LED设置 -->
					<span slot="label"><i class="iconfont icon-led" style="color:green;"></i>&nbsp; {{$t('devSet.led_set')}}
					</span>
					<dev-led></dev-led>
				</el-tab-pane>

				<el-tab-pane>
					<!-- RFID设置 -->
					<span slot="label"><i class="iconfont icon-RFID" style="color: deepskyblue;"> </i>&nbsp;
						{{$t('devSet.rfid_set')}}</span>
					<dev-rfid></dev-rfid>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 计划任务 -->
					<span slot="label"><i class="iconfont icon-jihua" style="color: tomato;"></i>&nbsp; {{$t('devSet.plan_task')}}
					</span>
					<plan-task></plan-task>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 固件升级 -->
					<span slot="label"><i class="iconfont icon-shengji" style="color: rosybrown;"></i>&nbsp;
						{{$t('devSet.firmware_update')}}
					</span>
					<dev-firmware></dev-firmware>
				</el-tab-pane>

				<el-tab-pane>
					<!-- SIA-IP设置 -->
					<span slot="label"><i class="iconfont icon-qitashezhi" style="color: deepskyblue;"></i>&nbsp;
						{{$t('devSet.siaip_set')}} </span>
					<dev-siaip></dev-siaip>
				</el-tab-pane>
				<el-tab-pane>
					<!-- 其他设置 -->
					<span slot="label"><i class="iconfont icon-config" style="color: #008B8B;"></i>
						&nbsp; {{$t('devSet.other_set')}}
					</span>
					<dev-other></dev-other>
				</el-tab-pane>

				<el-tab-pane>
					<!-- 恢复出厂 -->
					<span slot="label"><i class="iconfont icon-huifuchuchang" style="color:#006600"></i>&nbsp;
						{{$t('devSet.restore_factory')}} </span>
					<dev-reset></dev-reset>
				</el-tab-pane>

			</el-tabs>
		</div>
	</el-dialog>
</template>

<script>
	import DevInformations from '../alarmparameter/information/DevInformation.vue';
	import DevAlarm from '../alarmparameter/alarm/DevAlarm.vue';
	import DevPassword from './password/DevPassword.vue';
	import DevSiren from './siren/DevSiren.vue';
	import DevCms from './cms/DevCMS.vue';
	import DevLed from './led/LedSet.vue';
	import PlanTask from './plan/PlanTask.vue';
	import DevRfid from './rfid/DevRfid.vue';
	import DevFirmware from './firmware/DevFirmware.vue';
	import DevSiaip from './siaip/DevSiaip.vue';
	import DevReset from './reset/ResetFactory.vue';
	import DevOther from './other/DevOther.vue';
	export default {
		components: {
			DevInformations,
			DevAlarm,
			DevPassword,
			DevSiren,
			DevCms,
			DevLed,
			PlanTask,
			DevRfid,
			DevFirmware,
			DevSiaip,
			DevReset,
			DevOther,
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {

			};
		},
		methods: {
			// 关闭
			handleClose() {
				this.$emit('update:visible', false);
			}
		},
	}
</script>

<style>
	.el-dialog__body {
		padding: 5px 0px !important;
	}

	.el-tabs--left .el-tabs__header.is-left {
		margin-right: 1px !important;

	}
</style>
