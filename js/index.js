var vm = new Vue({
	el : "#app",
	data :{
		infos:{
			name: '',
			sex: '',
			phone: '',
			birthday: ''
		},
		tableData: [{
          sex: '男',
          name: '王小虎',
          phone: '12323223',
          birthday:'2017-08-09'
        }, {
          sex: '男',
          name: '王小虎',
          phone: '12323223',
          birthday:'2017-08-09'
        }, {
          sex: '男',
          name: '王小虎',
          phone: '12323223',
          birthday:'2017-08-09'
        }, {
          sex: '男',
          name: '王小虎',
          phone: '12323223',
          birthday:'2017-08-09'
        }]
	},
	methods:{
		adduser:function(){
			var p = {sex:this.infos.sex,name:this.infos.name,phone:this.infos.phone,birthday:this.infos.birthday}
			this.tableData.push(p);
		}
	}
})