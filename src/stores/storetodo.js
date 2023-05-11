import { defineStore } from "pinia";
import todoApi from "src/apis/todoApi";


export default defineStore("myTodo", {
    state: () => ({
        tasks: [],
        
    }),

    getters: {

    },

    actions: {
        async insertDbTodo(title){
        
            const payload = {
                title,
            };
            
            const result = await todoApi.create(payload);
            if (result.status == 200) {
                if (result.data.id) {
                    // front
                    this.tasks.unshift({
                        id: result.data.id,
                        title,
                        done: "N",
                    });
                    this.totalCount++;
                }  
            }
            
        },

        async fetchDbTodo(){
            const len = 5;
            const lastId = this.tasks.length
                ? this.tasks[this.tasks.length - 1].id
                : 0;
            const payload = {
                lastId,
                len,
            };
            const result = await todoApi.list(payload);
            if (result.data && result.data.list) {
                this.tasks = [...this.tasks, ...result.data.list];
                this.totalCount = result.data.totalCount;
            }
        },

        async removeDbTodo(item){
            const idx = this.tasks.findIndex((task) => task.id == item.id);
            this.tasks.splice(idx, 1);  
        },

        edDbTodo(item) {
            const idx = this.tasks.findIndex((task) => task == item);
            item.done = "N";
            this.tasks.splice(idx, 1, item);
        },

        resetDbTodo(){
            if (this.tasks) {
                this.tasks = [];
            }
        }
    }
})