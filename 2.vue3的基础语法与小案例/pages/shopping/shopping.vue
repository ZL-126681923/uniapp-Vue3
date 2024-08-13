<template>
  <view class="content">
    <checkbox-group @change="getChecked">
      <view class="box" v-for="(item, idx) in list" :key="item.id">
        <checkbox :value="item.id" :checked="item.checked"></checkbox>
        <text>{{ item.name }}</text>
        <text class="sale">售价: {{ item.price }}元</text>
        <button type="primary" size="mini" class="btn" @click="remove(idx)">删除</button>
      </view>
    </checkbox-group>
    <text class="total">已选择{{ number }}件商品, 总价为:{{ totalPrice }}元</text>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

let list = ref([
  { id: '1', name: '小米', price: 2005, checked: false },
  { id: '2', name: '华为', price: 5999, checked: false },
  { id: '3', name: 'oppo', price: 4999, checked: false },
  { id: '4', name: 'vivo', price: 1999, checked: false },
]);

let number = ref(0);
let totalPrice = ref(0);

function remove(idx) {
  list.value.splice(idx, 1);
  updateCounts();
}

function getChecked(e) {
  const checkedValues = e.detail.value;
  list.value.forEach(item => {
    item.checked = checkedValues.includes(item.id);
  });
  updateCounts();
}

const updateCounts = () => {
  number.value = list.value.filter(item => item.checked).length;
  totalPrice.value = list.value.reduce((acc, item) => acc + (item.checked ? item.price : 0), 0);
};
updateCounts(); // 初始化计算
</script>

<style lang="scss" scoped>
.total {
  display: block;
  width: 80%;
  margin: 20px auto;
  text-align: center;
  background-color: #ccc;
  box-shadow: 0 0 0 2px pink;
}

.box {
  display: flex;
  box-shadow: 0 0 10px #ccc;
  margin: 10px;
  .btn {
    margin-right: 0px;
  }

  .sale {
    margin: 0px 10px;
  }
}
</style>