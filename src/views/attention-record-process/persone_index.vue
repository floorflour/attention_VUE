vue
<template>
  <el-form ref="form">
    <el-row>
      <el-col :span="8">
        <el-form-item label="时间范围">
          <el-date-picker v-model="timestart" type="datetime" placeholder="开始时间">
          </el-date-picker>
          至
          <el-date-picker v-model="timeend" type="datetime" placeholder="结束时间">
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="方法">
          <el-select v-model="method">
            <el-option label="Re-ID识别" value="Re-ID"></el-option>
            <el-option label="人脸识别识别" value="face"></el-option>
            <el-option label="指纹识别" value="fingerprint"></el-option>
            <el-option label="人工打卡" value="manual"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
    </el-row>
  </el-form>

  <el-table :data="list">
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="time" label="时间"></el-table-column>
    <el-table-column prop="method" label="识别方法">
      <template #default="scope">
        <el-button @click="report(scope.row)">申报</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const timestart = ref('');
const timeend = ref('');
const method = ref('Re-ID');

async function search() {
  try {
    const response = await axios.post('http://localhost:5000/attention_search', {
      "name": "",
      "timestart": timestart.value,
      "timeend": timeend.value,
      "method": method.value,
      "test": "test"
    })
  } catch (error) {
    console.error(error)
  }
}
</script>
