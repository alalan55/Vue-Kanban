<template>
  <div class="card">
    <div class="card__state">
      <div class="state__ball"></div>
      <div class="state__description">
        <span>Feito</span>
      </div>
    </div>
    <div class="card__description">
      <p>Personalizar as telas de erro do template metronic</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";
.card {
  border-radius: 5px;
  padding: .5rem;
  background: white;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.05);
}
</style>