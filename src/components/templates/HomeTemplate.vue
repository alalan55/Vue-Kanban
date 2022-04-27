<template>
  <div class="home__template">
    <HeaderComponent />
    <div class="__content">

    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/organisms/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home__template {
  width: 100%;
 
  .__content{
      height: calc(100vh - 70px);
  }
}
</style>
