<template>
  <div class="home__template">
    <HeaderComponent />
    <div class="__content">
      <div class="__wrapper__content">
        <StateCard class="__states" title="Open">
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </StateCard>

        <StateCard class="__states" title="In progress" />

        <StateCard class="__states" title="Completed" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/organisms/HeaderComponent.vue";
import StateCard from "@/components/molecules/StateCard.vue";
import CardTask from "@/components/molecules/CardTask.vue";
export default {
  components: {
    HeaderComponent,
    StateCard,
    CardTask,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";

.home__template {
  width: 100%;

  .__content {
    height: calc(100vh - 70px);
    background: $grey-1;
    padding: $p-2;
    .__wrapper__content {
      height: 100%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      & > .__states {
        flex: 1 1 400px;
      }
    }
  }
}
</style>
