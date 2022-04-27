<script setup>
import HomeTemplate from "@/components/templates/HomeTemplate.vue";
import {data} from './mock'
const dados = data
</script>

<template>
  <HomeTemplate :dados="dados" />
</template>
