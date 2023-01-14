<template>
  <header>
    <nav>
      <div class="logo">
        <span> Kanban Vue. </span>
      </div>
      <div class="button-area">
        <Button title="Nova Tarefa" @action="showModal = true" />
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
import Button from "../atoms/vkButton.vue";
export default {
  components: {
    Modal,
    Button,
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
    }
  }
  .modal__child {
    position: absolute;
    top: 0 !important;
  }
}
</style>
