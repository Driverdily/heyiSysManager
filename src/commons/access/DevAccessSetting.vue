<template>
	<el-dialog :visible.sync="visible" customClass="h-700px" title="配件管理" :close-on-press-escape="false"
	 :close-on-click-modal="false" append-to-body :before-close="handleClose">
		<div>
			<el-tabs tab-position="top" type="card" style="border-top: 1px solid gray;">
				<!-- 配件 -->
				<el-tab-pane>
					<span slot="label">
						{{$t('accesses')}}</span>
					<access-zone></access-zone>
				</el-tab-pane>
				<!-- 智能插座 -->
				<el-tab-pane>
					<span slot="label">
						{{$t('socketes')}}</span>
						<access-socket></access-socket>
				</el-tab-pane>
				<!-- 智能遥控器 -->
				<el-tab-pane>
					<span slot="label">
						{{$t('controles')}}</span>
						<access-control></access-control>
				</el-tab-pane>
				<!-- 智能户外声光警号 -->
				<el-tab-pane>
					<span slot="label">
						{{$t('out_sirenes')}}</span>
						<access-out-siren></access-out-siren>
				</el-tab-pane>
				<!-- 继电器 -->
				<el-tab-pane>
					<span slot="label">
						{{$t('relayes')}}</span>
						<access-relay></access-relay>
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label">
						{{$t('rfides')}}</span>
						<access-rfid></access-rfid>
				</el-tab-pane>
				
			</el-tabs>
		</div>
	</el-dialog>
</template>

<script>
	import AccessZone from './zone/AccessZone.vue';
	import AccessSocket from './socket/AccessSocket.vue';
	import AccessControl from './control/AccessControl.vue';
	import AccessOutSiren from './siren/AccessOutSiren.vue';
	import AccessRelay from './relay/AccessRelay.vue';
	import AccessRfid from './rfid/AccessRfid.vue';

	export default {
		components: {
			AccessZone,
			AccessSocket,
			AccessControl,
			AccessOutSiren,
			AccessRelay,
			AccessRfid,
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
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
	.h-700px {
		height: 700px;
		width: 800px;
		border-radius: 5px;
	}

	.el-dialog__body {
		padding: 1px 0px !important;
	}

	.el-tabs--left .el-tabs__header.is-left {
		margin-right: 1px !important;

	}
</style>
