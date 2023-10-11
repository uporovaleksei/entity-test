<script setup lang="ts">
const props = defineProps(['entities'])
</script>

<template>
  <ul>
    <li v-for="item in entities" :key="item.id">
      {{ item.id }}
      {{ item.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  li{
    padding: 15px;
    background: #ececec;
    height: 100%;
  &:nth-child(2n){
    background: #ffff;
  }
  }
  
}
</style>
