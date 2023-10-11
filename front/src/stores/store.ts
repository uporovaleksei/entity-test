import { defineStore } from 'pinia'

interface Entity {
  id: number
  name: string
}

export const usePropsStore = defineStore({
  id: 'props',
  state: () => ({
    entities: [] as Entity[]
  }),
  getters: {
    getEntities(): Entity[] {
      return this.entities
    }
  },
  actions: {
    setEntities(entities: Entity[]): void {
      this.entities = entities
    }
  }
})
