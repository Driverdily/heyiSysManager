<template>
	<div>
		<el-row class="dev-set-list-item">
			<el-col :span="3" style="align-items: center;">

				<img src="../../../assets/img/weixin.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="15" >

				<span>{{$t('weixin_message')}}</span>
			</el-col>
			<el-col :span="6" >
				<el-radio v-model="radio" label="1">开</el-radio>
				<el-radio v-model="radio" label="2">关</el-radio>
			</el-col>

		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="3" style="align-items: center;">

				<img src="../../../assets/img/door_66_orange.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="15" >

				<span>{{$t('open_door_sms_notice')}}</span>
			</el-col>
			<el-col :span="6" >
				<el-radio v-model="radio" label="1">开</el-radio>
				<el-radio v-model="radio" label="2">关</el-radio>
			</el-col>

		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="3" style="align-items: center;">

				<img src="../../../assets/img/closedoor_66_blue.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="15" >

				<span>{{$t('open_door_sms_notice')}}</span>
			</el-col>
			<el-col :span="6" >
				<el-radio v-model="radio" label="1">开</el-radio>
				<el-radio v-model="radio" label="2">关</el-radio>
			</el-col>

		</el-row>



<!-- 提交 -->
		<el-row class="dev-set-list-item">
			<el-col :span="24" >
				<el-button type="infor" style="float: right;margin-right: 1.25rem;padding: 7px 25px;" size="mini">提交</el-button>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio: '',
			};
		}
	}
</script>

<style>


</style>
