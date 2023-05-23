<template>
  <div class="scroll-y">
    <h3 class="mb-20px">这个地方用来展示Flask的响应</h3>
    <div class="rowSS">
      <div class="mb-10px ml-60px">
        <div class="font-bold text-20px">测试返回</div>
        <div class="mt-20px">testGet: {{ testGetData.data }}</div>
      </div>
      <div>
        <input v-model="input1" />
        <input v-model="input2" />
        <button @click="postData">提交</button>
        <div class="mt-20px">testPost: {{ testPostData.data }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const testGetData = ref({}); // 响应数据存储在responseData变量中
const testPostData = ref({});
async function fetchTestMsg() {
  try {
    const response = await axios.get('http://localhost:5000/testget');
    testGetData.value = response.data; // 将响应数据赋值给responseData
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

const input1 = ref('');
const input2 = ref('');

async function postData() {
  console.log(input1.value)
  const response = await axios.post('http://localhost:5000/serach_all', {
    'input1': input1.value,
    'input2': input2.value
  });
  testPostData.value = response.data

}

onMounted(fetchTestMsg); // 组件加载时获取数据
</script>
