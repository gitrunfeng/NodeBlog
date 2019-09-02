var mongoose = require('mongoose');

//内容的表结构
module.exports = new mongoose.Schema({
    //关联字段 - 内容分类的id
    yl: {
        //类型
        type: mongoose.Schema.Types.ObjectId,
        //引用
        ref: 'Yl'
    },
    //内容标题
    title: String,
    //内容url
    ylUrl:String
})