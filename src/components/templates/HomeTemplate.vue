<template>
  <div class="home__template">
    <HeaderComponent />
    <div class="home__template__content">
      <div class="home__template__content__wrapper">
        <StateCard
          ref="openZone"
          class="states drop-zone"
          title="Open"
          color="#ffcc00"
          @drop="onDrop($event, 0)"
          @dragenter.prevent
          @dragover.prevent
        >
          <template v-if="!store.$loading">
            <CardTask
              v-for="(item, idx) in getList(0)"
              :key="idx"
              :cardInfo="item"
              draggable="true"
              @dragstart="startDrag($event, item)"
            />
          </template>
          <template v-else>
            <div>
              <CardSkeleton
                v-for="i in openZoneLength || 3"
                draggable="false"
                :key="i"
                style="margin-bottom: 1rem"
              />
            </div>
          </template>
        </StateCard>

        <StateCard
          class="states drop-zone"
          title="In progress"
          color="#FF540D"
          @drop="onDrop($event, 1)"
          @dragenter.prevent
          @dragover.prevent
        >
          <template v-if="!store.$loading">
            <CardTask
              v-for="(item, idx) in getList(1)"
              :key="idx"
              :cardInfo="item"
              draggable="true"
              @dragstart="startDrag($event, item)"
            />
          </template>
          <template v-else>
            <div>
              <CardSkeleton
                v-for="i in inProgressZoneLength || 4"
                :key="i"
                draggable="false"
                style="margin-bottom: 1rem"
              />
            </div>
          </template>
        </StateCard>

        <StateCard
          class="states drop-zone"
          title="Completed"
          color="#00ff7f"
          @drop="onDrop($event, 2)"
          @dragenter.prevent
          @dragover.prevent
        >
          <template v-if="!store.$loading">
            <CardTask
              v-for="(item, idx) in getList(2)"
              :key="idx"
              :cardInfo="item"
              draggable="true"
              @dragstart="startDrag($event, item)"
            />
          </template>

          <template v-else>
            <div>
              <CardSkeleton
                v-for="i in completedZoneLength || 2"
                :key="i"
                draggable="false"
                style="margin-bottom: 1rem"
              />
            </div>
          </template>
        </StateCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useTaskStore } from "@/stores/task";
import HeaderComponent from "@/components/organisms/HeaderComponent.vue";
import StateCard from "@/components/molecules/StateCard.vue";
import CardTask from "@/components/molecules/CardTask.vue";
import CardSkeleton from "../molecules/CardSkeleton.vue";
export default {
  components: {
    HeaderComponent,
    StateCard,
    CardTask,
    CardSkeleton,
  },
  props: {
    dados: { type: Array, required: true, default: undefined },
  },
  setup(props) {
    const store = useTaskStore();
    const arrayData = ref([...props.dados]);
    const openZone = ref(null);
    const openZoneLength = ref(0);
    const inProgressZoneLength = ref(0);
    const completedZoneLength = ref(0);

    const getList = (state) => {
      return arrayData.value.filter((data) => data.state == state);
    };
    const getListLength = (state) => getList(state).length;

    watch(
      () => props.dados,
      (nv) => {
        if (nv) {
          arrayData.value = [...nv];
        }
      },
      { deep: true }
    );
    watch(arrayData, (nv) => {
      if (nv.length > 0) {
        openZoneLength.value = getListLength(0);
        inProgressZoneLength.value = getListLength(1);
        completedZoneLength.value = getListLength(2);
      }
    });

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, state) => {
      const ITEM_ID = event.dataTransfer.getData("itemID");
      const ITEM = arrayData.value.find((item) => item.id == ITEM_ID);
      ITEM.state = state;

      store.EDIT_TASK(ITEM);
    };

    return {
      getList,
      getListLength,
      startDrag,
      onDrop,
      store,
      openZone,
      openZoneLength,
      inProgressZoneLength,
      completedZoneLength,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.home__template {
  width: 100%;

  &__content {
    min-height: calc(100vh - 70px);
    padding: $p-2;
    &__wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      & > .states {
        flex: 1 1 250px;
        height: auto;
      }
    }

    @media (max-width: 729px) {
      height: auto;
    }
  }
}
</style>
