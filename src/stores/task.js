import { defineStore, acceptHMRUpdate } from "pinia";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
    task: {},
    taskToEdit: {},
    loading: false,
  }),
  actions: {
    async ADD_TASK(task) {
      const obj = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      };

      try {
        const req = await fetch(`${import.meta.env.VITE_BASE_URL}`, obj);
        const res = await req.json();

        if (res.status === 201) {
          this.GET_TASKS();
          return true;
        }
      } catch (error) {
        console.error({ error: error, message: "Erro ao criar tarefa" });
        return false;
      }
    },

    async GET_TASKS() {
      try {
        this.tasks = [];
        this.loading = true
        const req = await fetch(import.meta.env.VITE_BASE_URL);
        const res = await req.json();
        this.tasks = res;
        this.loading = false
      } catch (error) {
        console.error(error);
        this.loading = false
      }
    },

    ADD_TASK_TO_EDIT(task) {
      this.taskToEdit = { ...task };
    },

    async EDIT_TASK(task) {
      const obj = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      };

      try {
        const req = await fetch(
          `${import.meta.env.VITE_BASE_URL}${task.id}`,
          obj
        );
        const res = await req.json();
        if (res.status == 200) {
          this.GET_TASKS();
          this.RESET_TASK_TO_EDIT()
          return true;
        }
      } catch (error) {
        console.error({ error: error, message: "Erro ao atualizar tarefa" });
        return false;
      }
    },

    RESET_TASK_TO_EDIT() {
      this.taskToEdit = {};
    },

    async DELETE_TASK(task) {
      const obj = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      };

      try {
        const req = await fetch(
          `${import.meta.env.VITE_BASE_URL}${task.id}`,
          obj
        );
        const res = await req.json();
        if (res.status == 200) {
          this.GET_TASKS();
          return true;
        }
      } catch (error) {
        console.error({ error: error, message: "Erro ao apagar tarefa" });
        return false;
      }
    },
  },
  getters: {
    $tasks(state) {
      return state.tasks;
    },
    $taskToEdit(state) {
      return state.taskToEdit;
    },
    $loading(state){
      return state.loading
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
