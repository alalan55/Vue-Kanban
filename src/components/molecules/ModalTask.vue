<template>
  <div class="modal">
    <div class="card-modal">
      <div class="content__modal">
        <div class="__title">
          <span>Criação/edição de tarefa</span>
        </div>

        <div class="__form">
          <div class="title__form">
            <label>
              Título

              <input
                v-model="modalObject.title"
                type="text"
                placeholder="Insira um título"
              />
            </label>
          </div>
          <div class="description__form">
            <label>
              Descrição
              <textarea
                v-model="modalObject.text"
                cols="30"
                rows="10"
                placeholder="Insira a descrição"
              ></textarea>
            </label>
          </div>
        </div>

        <div class="__action">
          <button @click="sendForm">Cadastrar</button>
        </div>

        <div class="__close">
          <img
            src="/img/icons/close-icon.svg"
            @click="$emit('close')"
            alt="Botão de fechar modal"
          />
        </div>
      </div>
    </div>
    <div class="overlay" @click="$emit('close')"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";
export default {
  setup(props, { emit }) {
    const store = useTaskStore();
    const modalObject = ref({});

    const sendForm = () => {
      let obj = { ...modalObject.value, id: Date.now(), state: 0 };
      store.ADD_TASK(obj);

      setTimeout(() => {
        emit("close");
      }, 300);
    };

    const isObjectEmpty = (obj) =>{
      return Object.keys(obj).length === 0;
    }
    !isObjectEmpty(store.$taskToEdit) ? modalObject.value = store.$taskToEdit : ''

    return { store, modalObject, sendForm };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";

.modal {
  .card-modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    margin-left: -150px;
    max-width: 800px;
    .content__modal {
      background: white;
      padding: 1rem;
      width: 100%;

      border-radius: 5px;
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.11);
      position: relative;

      .__title {
        margin-bottom: 2rem;
        span {
          font-weight: 600;
        }
      }
      .__form {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > div {
          label {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-weight: 500;
            input,
            textarea {
              padding: 0.7rem;
              border: 1px solid $grey-3;
              border-radius: 5px;
              max-width: 100%;
              min-width: 100%;

              &:focus {
                outline: none;
              }
            }
          }
        }
      }
      .__action {
        button {
          color: white;
          border: none;
          background: $blue-1;
          padding: 0.7rem;
          width: 100%;
          border-radius: 5px;
          font-weight: 500;
          transition: 0.2s ease-in-out;
          cursor: pointer;

          &:hover {
            background: $blue-2;
          }
        }
      }
      .__close {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 99;
    opacity: 0.5;
  }
}
</style>
