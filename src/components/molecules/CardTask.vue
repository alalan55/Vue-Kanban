<template>
  <div class="card">
    <div class="card__state">
      <div class="left">
        <div
          class="state__ball"
          :class="{
            open: checkState(0),
            progress: checkState(1),
            completed: checkState(2),
          }"
        ></div>
        <div class="state__description">
          <span>{{ states[cardInfo.state] }}</span>
        </div>
      </div>
      <div class="right">
        <img
          src="/img/icons/edit-icon.svg"
          alt="Ícone de edição"
          @click="editTask(cardInfo)"
        />
      </div>
    </div>

    <div class="card__title">
      <span>
        {{ cardInfo.title || "Sem título" }}
      </span>
    </div>

    <div class="card__description">
      <p>{{ cardInfo.text }}</p>
    </div>

    <teleport to="body">
    <div v-if="showModal">
      <Modal @close="showModal = false" />
    </div>
  </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";
import Modal from "@/components/molecules/ModalTask.vue";
export default {
  props: {
    cardInfo: { type: Object },
  },
  components: {
    Modal,
  },
  setup(props) {
    const store = useTaskStore();
    const showModal = ref(false);
    const states = ["A fazer", "Em progresso", "Feito"];
    const checkState = (state) => {
      return props.cardInfo.state == state ? true : false;
    };
    const editTask = (cardInfo) => {
      store.ADD_TASK_TO_EDIT(cardInfo);
      showModal.value = true
    };
    return { states, checkState, editTask, showModal };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";
.card {
  border-radius: 5px;
  padding: 1.5rem 1rem;
  background: white;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.11);
  }

  .card__state {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      .state__ball {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $green-1;
      }

      .state__description {
        span {
          font-weight: 600;
          font-size: 0.6em;
        }
      }
      .completed {
        background: $green-1;
      }
      .progress {
        background: $orange-1;
      }
      .open {
        background: $yellow-1;
      }
    }
    .right {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: pointer;
      }
    }
  }
  .card__title {
    span {
      font-weight: 600;
    }
  }
}
</style>
