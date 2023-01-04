<template>
  <header>
    <nav>
      <div class="logo">
        <span> Kanban Vue. </span>
      </div>
      <div class="button-area">
        <button @click="showModal = true">Nova Tarefa</button>
      </div>
    </nav>

    <teleport to="body">
      <div v-if="showModal">
        <Modal @close="showModal = false" />
      </div>
    </teleport>
  </header>
</template>

<script>
import { ref } from "vue";
import Modal from "@/components/molecules/ModalTask.vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const showModal = ref(false);
    return { showModal };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
header {
  height: 70px;
  padding: 0 $p-2;
  display: flex;
  align-items: center;
  background: white;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      span {
        font-weight: 700;
        font-size: 1.3em;
        color: $black-2;
      }
    }
    .button-area {
      button {
        padding: 0.5rem 1rem;
        font-weight: 500;
        border: none;
        background: $blue-1;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover {
          background: $blue-2;
        }
      }
    }
  }
  .modal__child {
    position: absolute;
    top: 0 !important;
  }
}
</style>
