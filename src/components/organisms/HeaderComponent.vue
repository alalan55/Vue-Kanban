<template>
  <header>
    <div class="test">Header component</div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/sizes.scss";
header {
  height: 70px;
  padding: 0 $p-2;
  display: flex;
  align-items: center;
  .test {
  }
}
</style>
