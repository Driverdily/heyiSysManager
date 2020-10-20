<template>
	<div>
		<!-- 设备信息 -->
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/w20_66.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.dev_type')}}</span>
			</el-col>
			<el-col :span="8">
				<span class="txt-blue">设备的类型</span>
			</el-col>
		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/firmware_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.dev_id')}}</span>
			</el-col>
			<el-col :span="8">
				<span class="txt-blue">设备的ID</span>
			</el-col>
		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/speak_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.dev_name')}}</span>
			</el-col>
			<el-col :span="6">
				<el-input size="mini"></el-input>

			</el-col>
			<el-col :span="2">
				<el-button type="infor" v-model="input" style="margin-left: 5px;" size="mini">提交</el-button>
			</el-col>
		</el-row>

		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/smart_link_66_yellow.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.dev_imei')}}</span>
			</el-col>
			<el-col :span="8">
				<span class="txt-blue">设备的IMEI号</span>
			</el-col>
		</el-row>
		<!-- 用户信息 -->
		<el-row class="dev-set-list-item bg-gray">
			<el-col :span="24" class=" ">
				<span class="fa-1x m-l-10 txt-bold ">{{$t('devSet.other.user_information')}}</span>
			</el-col>
		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/user_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.user_name')}}</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini" style="width: 90%;"></el-input>

			</el-col>

		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/telphone_66_green.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.alarmphone.phone')}}</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini" style="width: 90%;"></el-input>

			</el-col>

		</el-row>

		<!-- 负责人 -->
		<el-row class="dev-set-list-item  bg-gray">
			<el-col :span="24">
				<span class="fa-1x m-l-10 txt-bold ">{{$t('devSet.other.principal')}}</span>
			</el-col>
		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/user_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.user_name')}}</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini" style="width: 90%;"></el-input>

			</el-col>

		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/telphone_66_green.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.alarmphone.phone')}}</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini" style="width: 90%;"></el-input>

			</el-col>

		</el-row>
		<!-- 维保人 -->
		<el-row class="dev-set-list-item  bg-gray">
			<el-col :span="24">
				<span class="fa-1x m-l-10 txt-bold ">{{$t('devSet.other.maintainer')}}</span>
			</el-col>
		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/user_66_gray.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.other.user_name')}}</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini" style="width: 90%;"></el-input>

			</el-col>

		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="2" style="align-items: center;">

				<img src="../../../assets/img/seticon/telphone_66_green.png" class="dev-set-list-img">

			</el-col>

			<el-col :span="14">

				<span>{{$t('devSet.alarmphone.phone')}}</span>
			</el-col>
			<el-col :span="8">
				<el-input size="mini" style="width: 90%;"></el-input>

			</el-col>

		</el-row>
		<el-row class="dev-set-list-item">
			<el-col :span="24">
				<el-button type="infor" style="float: right;margin-right: 1.25rem;padding: 7px 25px;" size="mini">提交</el-button>
			</el-col>
		</el-row>

	</div>



</template>

<script>
	export default {
		data() {
			return {
				input: '',

			}
		}
	}
</script>

<style>
</style>
