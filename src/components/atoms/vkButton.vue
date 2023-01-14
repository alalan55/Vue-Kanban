<script setup>
import Loading from "./vkLoading.vue";

const props = defineProps({
  loading: { type: Boolean, default: false },
  title: { type: String, default: "Título do botão" },
});
const emit = defineEmits(["action"]);
</script>

<template>
  <button @click="emit('action')">
    <Loading v-if="props.loading" />
    <span v-else>
      {{ props.title }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
button {
  color: white;
  border: none;
  background: $blue-1;
  padding: 0.7rem;
  width: 100%;
  border-radius: 5px;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: $blue-2;
  }
}
</style>
