<script setup lang="ts">
import { ref, defineProps  } from 'vue';
const props = defineProps(['links']);
const isOpen = ref(false);
const selectedItem = ref(props.links[0])
const emit = defineEmits(['selectItem'])
const selectItem = (item: string) => {
  isOpen.value = false;
  selectedItem.value = item;
	emit('selectItem', selectedItem.value);
};

</script>
<template>
  <div class="dropdown" >
    <div class="selected-item" @click="isOpen = !isOpen;">
			<div class="item">
			{{ selectedItem.name }}
			<span class="arrow" :class="{'rotate':isOpen}">&#10095</span>
			</div>

		</div>
    <transition name="fade">
      <ul v-if="isOpen">
        <li :class="{'active':selectedItem == item}" v-for="(item, index) in props.links" :key="index" @click="selectItem(item)">
					<span v-if="selectedItem == item">&#10004;</span>
					{{ item.name }}
				</li>
      </ul>
    </transition>
  </div>
</template>




<style lang="scss" scoped>

.dropdown {
  position: relative;
  cursor: pointer;
	width: 350px;
	height: 50px;
	.selected-item {
		border: 1px solid #ccc;
		border-radius: 5px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		.item{
		padding: 10px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		span{
			transition: 0.3s;
			&.rotate{
				transform: rotate(90deg);
			}
		}
		}


	}
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: absolute;
		background-color: rgb(255, 255, 255);
		border: 1px solid #ccc;
		overflow: hidden;
		list-style: none;
		border-radius: 2px;
		margin: 0;
		padding: 0;
			li {
				display: flex;
			align-items: flex-start;
			gap: 5px;
			width: 100%;
			padding: 10px;
			cursor: pointer;
			&.active{
				background: #ccc;
			}
		}
	}
	.fade-enter-active,
	.fade-leave-active {
			transition: opacity 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
			opacity: 0;
	}
}
</style>