<template>
	<div>
		<el-row>
			<el-col :span="24" style="text-align: center;">
				<el-form ref="form">
					<el-form-item>
						<el-input style="width: 80%;margin-top: 40px;" v-model="AlarmVoice"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" style="width: 30%;">{{$t('commons.save')}}</el-button>
						&nbsp; &nbsp; <span>内容长度20字</span>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				AlarmVoice: '',
			}
		}
	}
</script>

<style>
</style>
