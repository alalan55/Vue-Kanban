<template>
  <div class="home__template">
    <HeaderComponent />
    <div class="__content">
      <div class="__wrapper__content">
        <StateCard
          class="__states drop-zone"
          title="Open"
          color="#ffcc00"
          @drop="onDrop($event, 0)"
          @dragenter.prevent
          @dragover.prevent
        >
          <CardTask
            v-for="(item, idx) in getList(0)"
            :key="idx"
            :cardInfo="item"
            draggable="true"
            @dragstart="startDrag($event, item)"
          />
        </StateCard>

        <StateCard
          class="__states drop-zone"
          title="In progress"
          color="#FF540D"
          @drop="onDrop($event, 1)"
          @dragenter.prevent
          @dragover.prevent
        >
          <CardTask
            v-for="(item, idx) in getList(1)"
            :key="idx"
            :cardInfo="item"
            draggable="true"
            @dragstart="startDrag($event, item)"
          />
        </StateCard>

        <StateCard
          class="__states drop-zone"
          title="Completed"
          color="#00ff7f"
          @drop="onDrop($event, 2)"
          @dragenter.prevent
          @dragover.prevent
        >
          <CardTask
            v-for="(item, idx) in getList(2)"
            :key="idx"
            :cardInfo="item"
            draggable="true"
            @dragstart="startDrag($event, item)"
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
    const arrayData = ref(props.dados);

    const getList = (state) => {
      return arrayData.value.filter((data) => data.state == state);
    };

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };
    const onDrop = (event, state) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = arrayData.value.find((item) => item.id == itemID);
      item.state = state;
    };

    return {
      getList,
      startDrag,
      onDrop,
    };
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
