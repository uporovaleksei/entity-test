<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps(['selectedItem', 'loading'])
const buttonText = ref('Создать')
</script>

<template>
  <button class="disable" :class="{'active':selectedItem.value != null}" :disabled="selectedItem.value == null || !selectedItem">
    {{ props.loading ? '' : 'Создать' }}
    <div v-if="props.loading" id="preloader"></div>
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4c8bf7;
  border: 2px solid #4c8bf7;
  border-radius: 5px;
  transition: 0.3s;
  &.disable{
    background: #fff;
    border: 1px solid #cecece;
    color: #3c3b3b;
    cursor: not-allowed;
  }
  &.active{
 background: #4c8bf7;
  border: 2px solid #4c8bf7;
    color: #fff;
    cursor: pointer;

  }
}
#preloader {
  height: 15px;
  width: 15px;
  border: 5px solid rgba(60, 60, 180, 0.45);
  border-top: 5px solid rgb(60, 60, 180);
  border-radius: 50%;
  animation: rotate 1s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
