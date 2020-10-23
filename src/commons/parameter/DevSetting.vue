<template>
	<el-dialog :visible.sync="visible" customClass="h-80" title="设备名称(待)" :close-on-press-escape="false"
	 :close-on-click-modal="false" append-to-body :before-close="handleClose" >
		<div>
			<el-tabs tab-position="left" type="card" style="border-top: 1px solid gray;">
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-baojing" style="color: red;"></i>&nbsp;
						{{$t('alarmRecord_history')}}</span>
					<alarm-record></alarm-record>
				</el-tab-pane>       
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-rizhi" style="color: gray;"></i>&nbsp;
						{{$t('operateRecord_history')}} </span>
					<operate-record></operate-record>
				</el-tab-pane>
				<el-tab-pane>      
					<span slot="label"><i class="iconfont icon-dianhua" style="color: green;"></i>&nbsp; {{$t('alarm_phone_no')}}
					</span>
					<alarm-phone></alarm-phone>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-xinxi" style="color:skyblue;"></i>&nbsp;
						{{$t('alarm_voice_content')}} </span>
					<alarm-voice></alarm-voice>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-tuisong" style="color:#2E2E2E;"></i>&nbsp; {{$t('push_notice')}}
					</span>
					<push-notice></push-notice>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-guanmen" style="color: deepskyblue;"> </i>&nbsp;
						{{$t('close_door_set')}}</span>
					<close-door-set></close-door-set>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-kaimen" style="color: tomato;"></i>&nbsp; {{$t('open_door_set')}}
					</span>
					<close-door-set></close-door-set>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-weibao" style="color: rosybrown;"></i>&nbsp; {{$t('Maintenance')}}
					</span>
					<maintain-record></maintain-record>
				</el-tab-pane>

				<el-tab-pane>
					<span slot="label"><i class="iconfont icon-qitashezhi" style="color: deepskyblue;"></i>&nbsp;
						{{$t('other_set')}} </span>
					<other-set></other-set>
				</el-tab-pane>


			</el-tabs>
		</div>
	</el-dialog>
</template>

<script>
	import AlarmRecord from './record/AlarmRecord.vue';
	import OperateRecord from './record/OperateRecord.vue';
	import AlarmPhone from './number/AlarmNumber.vue';
	import AlarmVoice from './voice/AlarmVoice.vue';
	import PushNotice from './push/PushNotice.vue';
	import MaintainRecord from './maintain/MaintainRecord.vue';
	import OtherSet from './other/OtherSet.vue';
	import CloseDoorSet from './door/NoColseDoorSet.vue';

	export default {
		components: {
			AlarmRecord,
			OperateRecord,
			AlarmPhone,
			AlarmVoice,
			PushNotice,
			MaintainRecord,
			OtherSet,
			CloseDoorSet,
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
