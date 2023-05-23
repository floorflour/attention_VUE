vue
<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-button @click="handleChooseModel">选择模型</el-button>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="24">
              当前模型:{{ modelName }}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24"> </el-col>
    <el-col :span="24"> </el-col>
    <el-col :span="24"> </el-col>
    <el-col :span="24">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-button @click="handleGenerateModel">手动生成模型</el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="handleSetAutoUpdate">设置自动更新</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const modelName = ref('pytorch_result_20230511_01.mat')

function handleChooseModel() {
  modelName.value = 'pytorch_result_20230511_02.mat'
  ElMessage({
    message: '模型更新成功',
    type: 'success'
  })
}

function handleGenerateModel() {
  ElMessage({
    message: '手动生成模型成功',
    type: 'success'
  })
}

function handleSetAutoUpdate() {
  ElMessage({
    message: '自动更新模型设置成功',
    type: 'success'
  })
}
</script>
