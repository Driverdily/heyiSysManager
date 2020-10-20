<template>
	<el-container class="map-all">
		<div class="left-nav">
			<el-input placeholder="输入关键字" v-model="filterText">
			</el-input>
			<el-tree class="filter-tree" :data="data" :props="defaultProps" :filter-node-method="filterNode" ref="tree">
			</el-tree>
		</div>
		<div class="content">
			<baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
				<!--缩放-->
				<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
				<!--定位-->
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
				<!--点-->
				<bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
					<!--提示信息-->
					<bm-info-window :show="map.show" style="padding: 8px;">
						<span style="font-weight: bold;">518C-0355</span><br />
						<hr />
						<span>设备编号:<span style="color: green;">00080355</span> </span> <br />
						<span>在线状态:<span style="color: red;">离线</span></span>
						<table style="text-align: center; width: auto;height: auto;">
							<tr>
								<td @click="showAlarmSetDialog">离家布防</td>
								<td>在家布防</td>
								<td>远程撤防</td>

							</tr>
							<tr>
								<td @click="showSetDialog">参数设置</td>
								<td @click="showAccessDialog">配件管理</td>
								<td>查看警情</td>

							</tr>
							<tr>
								<td @click="showInformationDialog">设备信息</td>
								<td>视频监控</td>
								<td>防区信息</td>
							</tr>

						</table>
					</bm-info-window>
				</bm-marker>

			</baidu-map>
		</div>

		<dev-setting ref="setMission" v-if="setVisible" :visible.sync="setVisible"></dev-setting>
		<dev-information ref="informationMission" v-if="informationVisible" :visible.sync="informationVisible"></dev-information>
		<alarm-set ref='alarmsetMission' v-if="setAlarmVisible" :visible.sync="setAlarmVisible"></alarm-set>
		<dev-access ref='accessMission' v-if="setAccessVisible" :visible.sync='setAccessVisible'></dev-access>
	</el-container>

</template>

<script>
	import DevSetting from '../parameter/DevSetting.vue';
	import DevInformation from '../devinformation/DevInformation.vue';
	import AlarmSet from '../alarmparameter/DevSetting.vue';
	import DevAccess from '../access/DevAccessSetting.vue';


	export default {
		components: {
			DevSetting,
			DevInformation,
			AlarmSet,
			DevAccess,

		},
		data() {
			return {
				setVisible: false, // 添加弹窗flag
				informationVisible: false,
				setAlarmVisible: false,
				setAccessVisible: false,
				map: {
					center: {
						lng: 121.4472540000,
						lat: 31.3236200000
					},
					zoom: 15,
					show: true,
					dragging: true
				},
				filterText: '',
				data: [{
						id: 1,
						label: '一级1',
						children: [{
							id: 4,
							label: '二级 1-1',
							children: [{
									id: 9,
									label: '三级1-1-1'
								},
								{
									id: 10,
									label: '三级 1-1-2'
								}
							]
						}]
					},
					{
						id: 2,
						label: '一级 2',
						children: [{
								id: 5,
								label: '二级 2-1'
							},
							{
								id: 6,
								label: '三级 2-2'
							}
						]
					}, {
						id: 3,
						label: '一级 3',
						children: [{
							id: 7,
							label: '二级 2-1',
						}, {
							id: 8,
							label: '二级 2-2'
						}]
					},
					{
						id: 9,
						label: '一级 4',

					}, {
						id: 11,
						label: '一级 5',
						children: [{
							id: 12,
							label: '二级 5-1',
							children: [{
								id: 13,
								label: '三级 5-1-1'
							}]
						}]

					}, {
						id: 14,
						label: '一级 6'
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				},

			};
		},
		methods: {
			handler({
				BMap,
				map
			}) {
				let me = this;
				console.log(BMap, map)
				// 鼠标缩放 
				map.enableScrollWheelZoom(true);
				// 点击事件获取经纬度
				map.addEventListener('click', function(e) {
					console.log(e.point.lng, e.point.lat)
				})
				//添加地图类型切换  地图  卫星 地图
				map.addControl(new BMap.MapTypeControl({
					mapTypes: [
						BMAP_NORMAL_MAP,
						BMAP_HYBRID_MAP,
					]
				}));
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},

			showSetDialog() {
				this.setVisible = true;
				console.log("点击事件", this.isShowSet)
			},
			showInformationDialog() {
				this.informationVisible = true;
			},
			showAlarmSetDialog() {
				this.setAlarmVisible = true;
				console.log("点击撤防", this.setAlarmVisible)
			},
			showAccessDialog() {
				this.setAccessVisible = true;
				console.log("点击配件", this.setAlarmVisible)
			}
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},

	}
</script>

<style scoped>
	.map-all {
		position: fixed;
		/* margin-top: 75px; */
		width: 100%;
		height: 100%;
	}

	.map-all .left-nav {
		width: 220px;
		display: inline;
	}

	.map-all .left-nav el-input {
		display: block;
	}

	.map-all .content {
		display: inline;
		margin-left: 10px;
		height: 100%;
		width: 100%;
	}

	.map {
		height: 100%;
		width: 100%;

	}


	table {
		border-collapse: collapse;
	}

	table,
	td {
		border: 3px solid white;
		background-color: sandybrown;
		padding: 3px 1rem;
		color: darkcyan;
	}

	td:hover {
		color: #000088;
	}

	td:active {
		color: darkred;
	}
</style>
