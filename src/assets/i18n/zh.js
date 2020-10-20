module.exports = {
	commons: {
		'date': '日期',
		'alarm': '警情',
		'serial_no': '序号',
		'name': '名称',
		'save': '保存',
		'time': '时间',
		'select_time': '选择日期时间',
		'select': '请选择',
		'change': '修改',
		'delete': '删除',
		'enter': '确定',
		'open': '开',
		'close': '关',
		'week': '星期',
		'arm': '布防',
		'disarm': '撤防',
		'arm_disarm': '布/撤防',
		'open_close': '开/关',
		'locate': '定位',
		'operate':'操作',
		'cancel':'取消',
	},

	login: {
		'username': '用户名',
		'password': '密码',
		'login': '登录',
		'remember_pwd': '记住密码',
		'forget_pwd': '忘记密码',
		'register': '注册账号',
		'input_account': '请输入账号',
		'input_pwd': '请输入密码',
		'reset_pwd': '重置密码',
		'input_email': '请输入密保邮箱',
		'enter': '确定',


	},
	devSet: {
		'alarmRecord_history': '警情历史',
		'operateRecord_history': '操作日志',
		'alarm_phone_no': '接警电话',
		'alarm_voice_content': '报警语音内容',
		'push_notice': '推送通知',
		'close_door_set': '未关门设置',
		'open_door_set': '未开门设置',
		'Maintenance': '维保记录',
		'other_set': '其他设置',
		'dev_information': '设备信息',
		'time_set': '时间设置',
		'alarm_set': '报警设置',
		'pwd_set': '密码设置',
		'cms_set': 'CMS设置',
		'voice_set': '声音设置',
		'rfid_set': 'RFID设置',
		'plan_task': '计划任务',
		'firmware_update': '固件升级',
		'siaip_set': 'SIA-IP 设置',
		'restore_factory': '恢复出厂',
		'led_set': 'LED 设置',
		'other_set': '其他设置',
		information: {
			'serial_no': '序列号',
			'hardware_version': '硬件版本',
			'fireware_version': '固件版本',
			'ac': '交流电',
			'dev_battery': '设备电池',
			'battery_voltage': '电池电压',
			'gsm_singal': 'GSM信号',
			'temperature': '温度',
			'dev_property': '设备属性',
			'dev_status': '状态信息',
			'dev_id': '设备ID',
			'other_param': '其他参数',
			'contect_person_info': '联系人信息[选填]',
			'contect_person': '联系人',
			'contect_phone': '联系电话',
			'contect_address': '联系地址',
			'ps': '备注',
			'lat_lon': '经纬度',
			'install_information':'安装信息',
			'install_time':'安装时间',
			'expire_time':'到期时间',
			'expire_remind':'到期提醒',

		},

		alarmphone: {
			'phone': '电话',
			'send_sms': '发送短信',
			'call_phone': '拨打电话',
			'phone_name': '电话名称:',
			'phone_number': '电话号码:',
			'lost_sms': '剩余短信条数',
			'lost_phone': '剩余电话分钟数',
			'tips_title': '运营商限制',
			'tips_one': '* 语音通知[同一个号码拨打频率2次/分钟，50次/天]',
			'tips_two': '* 短信息  [同一个号码一天只能推送50条通知类短信]',

		},
		maintain: {
			'declare_time': '申报时间',
			'fault_description': '故障描述',
			'maintain_result': '维保结果',

		},
		push: {
			'weixin_message': '微信消息推送',
			'open_door_sms_notice': '开/关门电话短信提醒',
			'close_door_sms_notice': '未开/未关门电话短信提醒',
		},

		door: {
			'repeat': '重复',
			'cycle': '周期',
			'enable': '启用',
			'to_enable': '是否启用',
			'all_day': '每天',
			'once_day': '仅一次',
			'customize': '自定义',
			'Monday': '周一',
			'Tuesday': '周二',
			'Wednesday': '周三',
			'Thursday': '周四',
			'Friday': '周五',
			'Saturday': '周六',
			'Sunday': '周日'

		},
		alarm: {
			'sos_sms': '紧急报警短信/语音',
			'push_set': '推送设置',
			'push_arm_disarm': '推送布撤防消息',
			'push_system_message': '推送系统消息',
			'delay_set': '延时设置',
			'arm_delay': '布防延时',
			'alarm_delay': '报警延时',
			'phone_alarm': '电话报警(需插入SIM卡)',
			'call_times': '拨号次数',
			'sos_key': '紧急键',
			'alarm_number': '接警号码',
			'alarm_type': '接警类型',
			'disable': '停用',
			'gsm_dial': 'GSM网络，普通语音',
			'gsm_sms': 'GSM网络，短信',
			'gsm_cid': 'GSM网络，CID中心',
			'arm_disarm': '布撤防',
			'sys_information': '系统信息',
			'sys_alarm': '系统报警',
			'close_intercom': '关闭对讲(紧急报警)',
			'open_intercom_1': '开启对讲(接警号码1)',
			'open_intercom_2': '开启对讲(接警号码2)',
			'open_intercom_3': '开启对讲(接警号码3)',
			'open_intercom_4': '开启对讲(接警号码4)',
			'open_intercom_5': '开启对讲(接警号码5)',
			'open_intercom_6': '开启对讲(接警号码6)',
			'open_intercom_7': '开启对讲(接警号码7)',
			'open_intercom_8': '开启对讲(接警号码8)',
		},
		password: {
			'program_pwd': '编程密码',
			'user_pwd': '用户密码',
			'duress_pwd': '挟持布防',

		},
		siren: {
			'inside_siren': '内置警号',
			'siren_volume': '警号音量',
			'alarm_duration': '报警时长',
			'tone_type': '提示音类型',
			'arm_voice_choose': '报警声选择',
			'outside_siren': '外界警号',
			'arm_disarm_tone': '布撤防提示音',
			'open_wireless_siren': '启用无线警号',
			'siren_address': '警号地址',
			'alarm_volume': '报警声',
			'alarm_fire': '火警报警声',
			'alarm_medical': '医疗报警声',
			'alarm_air': '空袭报警声',
			'alarm_110': '110报警声',
		},
		cms: {
			'switch': '开/关',
			'net_aisle': '网络通道',
			'account': '用户账号',
			'ip_address': 'IP地址',
			'port': '端口',
		},
		led: {
			'name': '名称',
			'standby_content': '待机内容',
		},
		plan: {
			'arm_time': '布防时间',
			'disarm_time': '撤防时间',
		},
		rfid: {
			'rfid_phone': 'RFID通知号码',
			'rfid_function': 'RFID功能',
		},
		firmware: {
			'this_version': '当前版本',
			'new_version': '可升级版本',
			'version_update': '固件升级',
			'run_update': '执行升级',

		},
		siaip: {
			'net_set': '网络参数设置',
			'link_type': '连接类型',
			'link_path': '连接路径',
			'domain_name': '域名',
			'protocol_set': '协议设置',
			'protocol_type': '协议类型',
			'account_prefix': '用户前缀',
			'receive_number': '接收方号码',
			'aes_128key': 'AES 128位加密',
			'time_monitor': '定时监测',
			'monitor_interval': '监测间隔',
			'retransmission': '重传',
			'retransmission_times': '重传次数',
			'retransmission_interval': '重传间隔',
		},
		reset: {
			'tips': '恢复出厂设备将清除所有配件并将重置所有设置项',
			'reset': '恢复出厂设置'
		},
		other: {
			'dev_type': '设备类型',
			'dev_id': '设备ID',
			'dev_name': '设备名称',
			'dev_imei': 'IMEI号',
			'user_information': '用户信息',
			'user_name': '用户姓名',
			'principal': '负责人',
			'maintainer': '维保人',
			'one_key_alarm': '一键紧急报警灯',
			'can_pro_relay_output': '可编程继电器输出',
			'can_pro_output': '可编程输出',
			'output_type': '输出类型',
			'output_mode': '输出模式',
			'output_time': '输出时间',
			'relay_output_type_none': '不使用',
			'relay_output_type_system': '系统报警',
			'relay_output_type_host': '主机布防',
			'relay_output_type_ac': '交流电断电',
			'relay_output_type_lowpower': '主机电池低电',
			'relay_output_type_telephone': '电话线故障',
			'relay_output_type_gsm': 'GSM模块故障',
			'relay_output_type_link': '门禁联动',
			'relay_output_type_control': '键盘/APP控制',
			'mode_Impuls': '脉冲输出',
			'mode_Fortsetzung': '持续输出',
		}

	},

	access: {
		'zones': '防区',
		'accesses': '配件',
		'socketes': '智能插座',
		'controles': '智能遥控器',
		'out_sirenes': '智能户外声光警号',
		'relayes': '继电器',
		'rfides': 'RFID',

		zone: {
			'enrolling_state': '对码状态',
			'enrolled': '已对码',
			'no_enroll': '未对码',
			'zone_name': '防区名称',
			'zone_type': '防区类型',
			'allow_home_arm': '允许在家布防',
			'open_close_door': '开/关门',
			'zone_fwb': '防区防误报',
			'zone_locking': '防区锁定',
			'zone_trigger_type': '防区触发类型',
			'zone_trigger_line': '线尾电阻',
			'zone_trigger_breake': '断开报警',
			'zone_trigger_close': '闭合报警',
			'led_AD_Screen': 'LED广告屏',
			'voice_content': '语音内容',
			'enrolling': '对码',
			're_code': '重新对码',
			'delete_code': '删除对码',
			'zone_delay': '延时',
			'zone_burglar': '盗窃',
			'zone_Perimeter': '周界',
			'zone_fire': '火警',
			'zone_gas': '气感',
			'zone_silent': '劫警',
			'zone_sos': '紧急',
			'zone_medical': '医疗',
			'zone_water_leakage': '漏水',
			'zone_doorbe': '门铃',
			'zone_smart': '智能',
			'zone_arm_disarm': '布/撤防',
			'zone_outing_reminder': '外出提醒',
			"zone_disable": '停用',
			'zone_day_night': '日夜',
			'zone_nor_silent': '无声紧急',
			'zone_audible': '有声紧急',
			'zone_key_switch': '钥匙开关',
			'zone_two_way': '一键对讲',
			'zone_doorbell_notice': '门铃通知',
			'zone_doorbell_alrm': '门铃报警',
			'zone_key_fire': '一键火灾报警',
			'zone_key_violence': '一键暴力袭击',
			'zone_key_quake': '一键地震报警',
			'zone_key_air_raid': '一键空袭报警',
			'zone_key_medical': '一键医疗求助',
			'zone_voice_prompt': '语音提示',
		},
		socket: {
			'linkage_set': '联动设置',
			'linkage_set_alarm': '联动系统报警',
			'linkage_zone_alarm': '联动防区报警',
			'linkage_duration': '联动输出时间',
			'timer_switch': '定时开关',
			'open_time': '开启时间',
			'close_time': '关闭时间',
		},
		relay: {
			'telecontrol_relay_type': '跟随类型',
			'telecontrol_relay_zone': '跟随防区',
			'telecontrol_relay_event': '跟随事件',
			'telecontrol_relay_mode_output': '输出模式',
			'telecontrol_relay_mode_zone': '防区模式',
			'telecontrol_relay_output_type': '输出类型',
			'telecontrol_relay_zone_num': '防区号',
			'telecontrol_relay_output_type_0': '不使用',
			'telecontrol_relay_output_type_1': '系统报警',
			'telecontrol_relay_output_type_2': '主机布防',
			'telecontrol_relay_output_type_3': '交流电断电',
			'telecontrol_relay_output_type_4': '主机电池低电',
			'telecontrol_relay_output_type_5': '电话线故障',
			'telecontrol_relay_output_type_6': 'GSM模块故障',
			'telecontrol_relay_output_type_7': '门禁联动',
			'telecontrol_relay_output_type_8': '键盘/APP控制',
			'telecontrol_relay_mode_zone_0': '防区报警时，脉冲式输出',
			'telecontrol_relay_mode_zone_1': '防区报警时输出，防区报警记忆清除时恢复',
			'telecontrol_relay_mode_zone_2': '防区布防输出，脉冲式输出',
			'telecontrol_relay_mode_zone_3': '防区布防输出，防区撤防恢复',

		},
		rfid: {
			'push_content': '刷卡通知内容',
		}


	}
}
