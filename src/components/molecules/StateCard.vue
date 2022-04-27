<template>
  <div class="state">
    <div class="title__state">
      <span> {{title}} </span>
    </div>
    <div class="content__state">

    </div>
  </div>
</template>

<script>
export default {
  props:{
    title: {type: String, default: 'Insira o título', required: true}
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";

.state {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title__state {
    padding: 1.1rem;
    background: white;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px rgba(212,212,255,0.09);

    span {
      font-weight: 600;
      font-size: 0.95em;
    }
  }
  .content__state{
    border: 1px solid rgb(202, 199, 199);
  }
}
</style>