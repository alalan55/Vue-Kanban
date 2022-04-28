import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTaskStore = defineStore({
    id: 'task',
    state: () =>({
        tasks: [],
        task: {}
    }),
    actions:{
        ADD_TASK(task){
            this.tasks.push(task)
        }
    },
    getters:{
        $tasks(state){
            return state.tasks
        }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot))
}