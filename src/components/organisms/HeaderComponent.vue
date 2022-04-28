<template>
  <header>
    <nav>
      <div class="logo">
        <span> Kanban Vue. </span>
      </div>
      <div class="button-area">
        <button>Nova Tarefa</button>
      </div>
    </nav>

    <teleport to="body">
      <Modal />
    </teleport>
  </header>
</template>

<script>
import Modal from "@/components/molecules/ModalTask.vue";
export default {
  components: {
    Modal,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";
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
}
</style>
