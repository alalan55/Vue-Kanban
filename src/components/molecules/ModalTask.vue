<template>
  <div id="modal" class="modal" @click="closeModal($event.target)">
    <div class="card-modal">
      <div class="content__modal">
        <div class="__title">
          <span v-if="isTaskEmpty">Criação de tarefa</span>
          <span v-else>Edição de tarefa</span>
        </div>

        <div class="__close">
          <img
            src="/img/icons/close-icon.svg"
            @click="$emit('close')"
            alt="Botão de fechar modal"
          />
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
                v-model="modalObject.description"
                cols="30"
                rows="10"
                placeholder="Insira a descrição"
                style="resize: none"
              ></textarea>
            </label>
          </div>
        </div>

        <div class="__action">
          <Button
            v-if="isTaskEmpty"
            title="Cadastrar"
            :loading="loading"
            @action="addTask"
          />
          <Button v-else title=" Atualizar" :loading="loading" @action="attTask" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";
import Button from "../atoms/vkButton.vue";

export default {
  components: { Button },
  setup(props, { emit }) {
    const store = useTaskStore();
    const modalObject = ref({});
    const isTaskEmpty = ref(true);
    const loading = ref(false);

    const addTask = async () => {
      loading.value = true;
      let obj = { ...modalObject.value, state: 0 };
      const responseIsOk = await store.ADD_TASK(obj);

      if (responseIsOk) emit("close");
      loading.value = false;
    };
    const attTask = async () => {
      loading.value = true;
      const SUCCESS_UPDATE = await store.EDIT_TASK(modalObject.value);
      if (SUCCESS_UPDATE) emit("close");
      loading.value = false;
    };
    const isObjectEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    };

    const closeModal = (evt) => {
      const id = evt.getAttribute("id");
      if (id == "modal") emit("close");
    };

    isTaskEmpty.value = isObjectEmpty(store.$taskToEdit);
    !isTaskEmpty.value ? (modalObject.value = store.$taskToEdit) : "";

    return { store, modalObject, addTask, attTask, isTaskEmpty, loading, closeModal };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0.7;
  }
  .card-modal {
    z-index: 999;
    max-width: 800px;
    width: 70%;
    .content__modal {
      background: white;
      padding: 2rem;
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
      }
      .__close {
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>
