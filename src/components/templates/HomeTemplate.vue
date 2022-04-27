<template>
  <div class="home__template">
    <HeaderComponent />
    <div class="__content">
      <div class="__wrapper__content">
        <StateCard class="__states" title="Open" color="#ffcc00">
          <CardTask
            v-for="(item, idx) in getList(0)"
            :key="idx"
            :cardInfo="item"
          />
        </StateCard>

        <StateCard class="__states" title="In progress" color="#FF540D">
          <CardTask
            v-for="(item, idx) in getList(1)"
            :key="idx"
            :cardInfo="item"
          />
        </StateCard>

        <StateCard class="__states" title="Completed" color="#00ff7f">
          <CardTask
            v-for="(item, idx) in getList(2)"
            :key="idx"
            :cardInfo="item"
          />
        </StateCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderComponent from "@/components/organisms/HeaderComponent.vue";
import StateCard from "@/components/molecules/StateCard.vue";
import CardTask from "@/components/molecules/CardTask.vue";
export default {
  components: {
    HeaderComponent,
    StateCard,
    CardTask,
  },
  props: {
    dados: { type: Array, required: true, default: undefined },
  },
  setup(props) {
    const openArray = ref([]);
    const inProgressArray = ref([]);
    const completedArray = ref([]);

    const initArrays = () => {
      openArray.value = props.dados.filter((data) => data.state == 0);
      inProgressArray.value = props.dados.filter((data) => data.state == 1);
      completedArray.value = props.dados.filter((data) => data.state == 2);
    };
    const getList = (state) => {
      return props.dados.filter((data) => data.state == state);
    };
    initArrays();
    return { openArray, inProgressArray, completedArray, getList };
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
        max-height: 100%;
      }
    }
  }
}
</style>
