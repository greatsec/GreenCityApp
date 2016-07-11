import { handleActions } from 'redux-actions';


export var groupList = handleActions({
  'SELECT_GROUP': (state, action) => ({...state, selected: action.payload.id})
},{
  list:[
    {
      id:1, name:'大数据产业园',
      desc: '盐城大数据产业园规划面积30平方公里，重点打造核心区、智能装备制造园和数字生态应用园，大力发展大数据采集、存储、应用、交易以及电子商务等业态，推动部省市政务、行业和民生、消费等数据资源在园区集聚。目前，大数据产业园创新大厦、大数据创新应用中心、博通智造园等一批新建载体相继投入使用，为大数据产业发展提供了充裕的承载空间。',
      item: '1,2'
    },
    {
      id:2, name:'聚龙湖公园',
      desc:'盐城市聚龙湖公园原名内港湖公园，项目总投资3.57亿元，占地面积500余亩。公园位于盐城市主城区新都路和聚亨路之间，公园于2008年初开工，是盐城市城南新区城市中心的核心地块，在原有的地形地貌基础上进行规划改造，湖面占地360余亩，建设有公园水韵舞台、音乐喷泉、九曲栈桥、清风馆、水云轩、飘城新街等10多个景点，最大限度地满足广大市民的观赏娱乐、休闲游览、体育健身的需求。',
      item: '3,4'
    },
    {
      id:3, name:'新龙广场',
      desc:'新龙广场是城南新区重点打造的城市综合体项目，是城南新区新的行政中心，整个工程自2011年1月开工建设以来进展顺利，目前正按照时序进度推进，整个项目的主体工程已竣工。',
      item: '5,6'
    },
    {
      id:4, name:'盐城国际软件园',
      desc:'盐城国际软件园成立于2009年10月，是盐城市发展软件和服务外包产业的重要载体，经过6年多发展，园区注册企业总数达487家，集聚了国家物联网产业研究院、软通动力、宝信软件、东华软件、华生恒业、艾克玛特等国内外软件行业知名企业，世纪龙科技、华恒兄弟动漫等本土企业也得到快速发展。',
      item: '7,8'
    }
  ]
});

export var itemList = handleActions({
  'SELECT_ITEM': (state, action) => ({...state, selected: action.payload.id})
},{
  list: [
    { id:'1', name:'采集点-1', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'2', name:'采集点-2', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'3', name:'采集点-3', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'4', name:'采集点-4', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'5', name:'采集点-5', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'6', name:'采集点-6', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'7', name:'采集点-7', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
    { id:'8', name:'采集点-8', data:[
      {type:'空气', name:'温度', val:'25', unit:'℃'},
      {type:'空气', name:'湿度', val:'50', unit:'%'},
      {type:'土壤', name:'温度', val:'30', unit:'℃'},
      {type:'土壤', name:'湿度', val:'80', unit:'%'},
      {type:'水', name:'温度', val:'20', unit:'℃'}
    ]},
  ]
})
