<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";
import Button from "../atoms/vkButton.vue";

// const props = defineProps({});
const emit = defineEmits(["close"]);

const modalObject = ref({});
const loading = ref(false);
const isTaskEmpty = ref(true);
const store = useTaskStore();

const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const addTask = async () => {
  loading.value = true;
  let obj = { ...modalObject.value, state: 0 };
  const responseIsOk = await store.ADD_TASK(obj);

  if (responseIsOk) emit("close");
  loading.value = false;
};

const attTask = async () => {
  const SUCCESS_UPDATE = await store.EDIT_TASK(modalObject.value);
  if (SUCCESS_UPDATE) emit("close");
};

isTaskEmpty.value = isObjectEmpty(store.$taskToEdit);
!isTaskEmpty.value ? (modalObject.value = store.$taskToEdit) : "";
</script>

<template>
  <div class="task">
    <form class="form">
      <div class="form__inputs">
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
      <div class="form--action">
        <Button
          v-if="isTaskEmpty"
          title="Cadastrar"
          :loading="loading"
          @action="addTask"
        />
        <Button v-else title=" Atualizar" :loading="loading" @action="attTask" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.task {
  .form {
    &__inputs {
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
  }
}
</style>
