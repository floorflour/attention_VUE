vue
<template>
  <el-form ref="form">
    <el-row>
      <el-col :span="8">
        <el-form-item label="姓名">
          <el-input v-model="name"></el-input>
        </el-form-item>
      </el-col>
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
          <el-select v-model="recognition_type">
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
    <el-table-column prop="time" label="时间">
      <template v-slot="{ row }">
        {{ formatDate(row.time) }}
      </template>
    </el-table-column>
    <el-table-column prop="recognition_type" label="识别方法">
    </el-table-column>
  </el-table>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
    :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
  </el-pagination>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import dayjs from 'dayjs'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

const list = ref([])
const name = ref('');
const timestart = ref('');
const timeend = ref('');
const recognition_type = ref('Re-ID');

async function search() {
  try {
    const response = await axios.post('http://localhost:5000/serach_all', {
      "name": name.value,
      "timestart": timestart.value,
      "timeend": timeend.value,
      "recognition_type": recognition_type.value,
      "test": "test"
    })
    console.log(response.data);
    list.value = response.data
  } catch (error) {
    console.error(error)
  }

}
function handleSizeChange(val) {
  pageSize.value = val
  currentPage.value = 1
}
function handleCurrentChange(val) {
  currentPage.value = val
}

function formatDate(time) {
  return dayjs(time).format('YYYY-MM-DD HH:mm')
}
</script>
