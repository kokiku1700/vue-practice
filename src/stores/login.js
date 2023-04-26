import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from "quasar";

export default defineStore("useLogin", {

    state: () => ({
        userIds: [],
    }),

    getters : {

    },

    actions: {
        joinMb(useId){
            if(this.userIds){
                this.userIds.unshift({
                    id: uid(),
                    useId,
                    done:'N'
                });
            }else{
                this.userIds=[];
                this.userIds.push({
                    id: uid(),
                    useId,
                    done:'N'
                });
            }
            LocalStorage.set("login", this.userIds);
        },

        removeMb(id){
            const idx = this.userIds.findIndex(useId => useId.id == id);
            this.userIds.splice(idx, 1);
            LocalStorage.set("login", this.userIds);
        }
    }
})