<script setup>
import { computed, ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import { data } from "./mock";
const dados = data;
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
</script>

<template>
  <HomeTemplate :dados="dados" />
</template>
