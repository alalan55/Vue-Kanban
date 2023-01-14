<script setup>
import { computed, ref, onMounted, nextTick, onBeforeUnmount, provide } from "vue";
import { useTaskStore } from "@/stores/task";
import HomeTemplate from "@/components/templates/HomeTemplate.vue";

const store = useTaskStore();
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

const onResize = () => {
  windowWidth.value = window.innerWidth;
};

const telaMobile = computed(() => {
  return windowWidth.value < 510 ? true : false;
});

const initData = () => store.GET_TASKS();
initData();
provide("isMobile", telaMobile);
</script>

<template>
  <div class="wrapper">
    <HomeTemplate :dados="store.$tasks" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.wrapper {
  min-height: 100vh;
  // height: auto !important;
  background: $grey-1;
}
</style>
