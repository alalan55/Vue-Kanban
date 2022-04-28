import { defineStore, acceptHMRUpdate } from "pinia";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
    task: {},
    taskToEdit: {},
  }),
  actions: {
    ADD_TASK(task) {
      this.tasks.push(task);
    },
    ADD_TASK_TO_EDIT(task) {
      this.taskToEdit = { ...task };
    },
    EDIT_TASK(task) {
      let idx = this.tasks.findIndex((obj) => {
        return obj.id == task.id;
      });
      this.tasks[idx] = task;
    },
    RESET_TASK_TO_EDIT() {
      this.taskToEdit = {};
    },
  },
  getters: {
    $tasks(state) {
      return state.tasks;
    },
    $taskToEdit(state) {
      return state.taskToEdit;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
