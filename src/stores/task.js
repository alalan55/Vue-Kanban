import { defineStore, acceptHMRUpdate } from "pinia";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
    task: {},
    taskToEdit: {}
  }),
  actions: {
    ADD_TASK(task) {
      this.tasks.push(task);
    },
    ADD_TASK_TO_EDIT(task){
        this.taskToEdit = {...task}
    },
    RESET_TASK_TO_EDIT(){
        this.taskToEdit = {}
    }
  },
  getters: {
    $tasks(state) {
      return state.tasks;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
