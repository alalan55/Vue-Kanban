<script setup>
import {
  computed,
  ref,
  onMounted,
  nextTick,
  onBeforeUnmount,
  provide,
} from "vue";
import { useTaskStore } from "@/stores/task";
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
// import { data } from "./mock";

const store = useTaskStore()
// const dados = data;
 const dados = store.$tasks
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

provide("isMobile", telaMobile);
</script>

<template>
  <div class="wrapper">
    <HomeTemplate :dados="dados" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";
.wrapper {
  min-height: 100vh;
  background: $grey-1;
}
</style>
