<script setup lang="ts">
const props = defineProps(['entities'])
</script>

<template>
  <ul>
    <li v-for="item in entities.slice().reverse()" :key="item.id">
      <div class="info">
        <div class="id">id: {{ item.id }}</div>
        <div class="name">Название: {{ item.name }}</div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  li {
    padding: 15px;
    background: #ececec;
    height: 100%;
    &:nth-child(2n) {
      background: #ffff;
    }
    .info {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
