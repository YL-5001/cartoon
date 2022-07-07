<template>
    <!-- :data只能读数组的数据 -->
    <!-- Object.values($store.state.car[0])把对象转换成数组形式,但只是value值放入数组 -->
    <!-- $store.state.n === 2 ? [this.$store.state.car[0]] : $store.state.n === 3 ? [this.$store.state.car[1]] : [ ] -->
  <div>
  <el-table 
    :data = "chooseData()"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="cost"
      label="时长">
    </el-table-column>
    <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleEdit(scope.$index, scope.row);dialogFormVisible =true">编辑</el-button>
        </template>
      </el-table-column>
  </el-table>
  <!-- dialog -->
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
        <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.src" autocomplete="off"></el-input>
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
        formLabelWidth: '120px',
        form: {}
      }
    },
    methods: {
      //判断显示哪个数据
      chooseData(){
        let formData
        switch (this.$store.state.n) {
          case 2:
            formData = [this.$store.state.car[0]]
            this.$store.state.xFormData = formData
            // console.log(this.$store.state.xFormData)
            break;
          case 3:
            formData = [this.$store.state.car[1]]
            this.$store.state.xFormData = formData
            break;
          case 5:
            formData = [this.$store.state.ship[0]]
            break;
          case 6:
            formData = [this.$store.state.ship[1]]
            break;
          case 7:
            formData = [this.$store.state.car[2]]
            break;
          default:
            break;
        }
        return formData
      },
      handleEdit(index, row) {
      console.log(index, row)
      //row是该行tableData对应的一行
      this.form = row
      }
    },
  }
</script>