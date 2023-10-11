<script setup lang="ts">
import DropDown from '../components/DropDown.vue'
import Button from '../components/Button.vue'
import DisplayEntity from '../components/DisplayEntity.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { server } from '../../utils/helper'

const curItem = ref('')
const selectedEntity = ref('')

const handleItemSelected = (item) => {
  curItem.value = item
  selectedEntity.value = item.value
}
const loading = ref(false)
const links: Array<{}> = [
  {
    name: 'Не выбрано',
    value: null
  },
  {
    name: 'Сделка',
    value: 'leads'
  },
  {
    name: 'Контакт',
    value: 'contacts'
  },
  {
    name: 'Компания',
    value: 'companies'
  }
]
const entities = ref([])
onMounted(() => {
  const storedEntities = localStorage.getItem('entities')
  if (storedEntities) {
    entities.value = JSON.parse(storedEntities)
  }
})
const createEntity = async () => {
  loading.value = true
  if (selectedEntity.value == null) {
    loading.value = false
    return
  }
  try {
    const data = {
      [selectedEntity.value]: []
    }
    const response = await axios.post(`${server.baseURL}crm/create-entity`, {
      entityType: selectedEntity.value,
      data: data
    })

    if (response.status == 200 || response.status == 201) {
      entities.value.push({
        name: selectedEntity.value,
        id: response.data.id
      })
    }
    loading.value = false
    localStorage.setItem('entities', JSON.stringify(entities.value))
  } catch (error) {
    console.error('Ошибка при создании сущности', error)
  }finally {
    loading.value = false; 
  }
}
</script>

<template>
  <div class="container">
    <div class="actions">
    <DropDown :links="links" @selectItem="handleItemSelected" />
    <Button @click="createEntity" :loading="loading" :selectedItem="curItem" />
    </div>
    <div class="content">

    <DisplayEntity :entities="entities" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  width: 60%;
  margin: 0 auto;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  .actions{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-start;
    gap: 20px;
  }
  .content{
    box-shadow:  0 0 4px #4c8bf7fe;
    border-radius: 5px;
    width: 100%;
    height: 500px;
    overflow-y: auto;
  }
}
</style>
