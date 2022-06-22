<template>
  <div>
    <el-button class="btn" type="text" @click="dialogFormVisible = true">添加</el-button>

    <el-dialog title="详细信息" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="种类选择" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择种类">
            <el-option label="汽车" value="qiche"></el-option>
            <el-option label="战船" value="zhanchuan"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价值" :label-width="formLabelWidth">
        <el-input v-model="form.cost" autocomplete="off"></el-input>
        </el-form-item>
        
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false; doIt(); sendMsg()">确 定</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                cost:'',
                region: '',
                // date1: '',
                // date2: '',
                // delivery: false,
                // type: [],
                // resource: '',
                // desc: ''
            },
        formLabelWidth: '120px'
        }
    },
    methods: {
        doIt(){
            console.log('点击了确定')
        },
        sendMsg(){
             //func: 是父组件指定的传数据绑定的函数，this.form:子组件给父组件传递的数据
             this.$emit('func',this.form)
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.btn {
    padding: 2.3vh 1.5vw;
    background-color: #fff;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 400;
    transition: color .5s , background 1s;
}
.btn:hover {
  color: #fff;
  background-color: #409EFF;
}
</style>