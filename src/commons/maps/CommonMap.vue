<template>
	<baidu-map class="bm-view" :center="{lng: 121.4095, lat: 31.1796}" :zoom="15" :scroll-wheel-zoom="true" @ready="handler">
		<!--缩放-->
		<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
		<!--定位-->
		<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
	
	
		<!--点-->
		<bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
		</bm-marker>
		
	</baidu-map>

</template>

<script>
	export default {
		data() {
			return {
				map: {
					center: {
						lng: 121.4472540000,
						lat: 31.3236200000
					},
					zoom: 15,
					show: true,
					dragging: true
				},
			}
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
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},

	}
</script>

<style>
	.bm-view {
		height: 100%;
		width: 100%;
	}
</style>
