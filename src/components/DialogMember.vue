<template>
    <q-dialog v-model="mbdialog">
        <q-card class="q-dialog-plugin">
            <q-list class="bg-white" separator bordered>
                <q-item
                    v-for="lid in userIds"
                    :key="lid.useId"
                    @click="lid.done = lid.done == 'Y' ? 'N' : 'Y'"
                    :class="{ 'done bg-blue-1' : lid.done == 'y'}"
                    v-ripple
                    clickable
                >
                    <q-item-section>
                        <q-item-label>
                            {{ lid.useId }}
                        </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn
                            flat
                            round
                            dense
                            color="red"
                            icon="delete"
                            @click.stop="removeMember(lid.id)"
                        ></q-btn>
                    </q-item-section>
                </q-item> 
            </q-list>          
            <q-card-actions align="right">
                <q-btn
                    color="primary"
                    unelevated
                    dense
                    label="확인"
                    @click="okClick"
                />
            </q-card-actions>
        </q-card> 
    </q-dialog>
    
</template>

<script>
    import useLoginStore from "src/stores/login";
    import { mapActions, mapState } from "pinia";

    export default {
        name: "JoinMembership",

        data(){
            return {
                mbdialog: false,

            }
        },

        computed: {
            ...mapState(useLoginStore, ["userIds"]),
        },

        mounted(){

        },

        methods: {
            ...mapActions(useLoginStore, ["joinMb", "removeMb"]),
            okClick() {
                this.mbdialog = false;
            },
            removeMember(id){
                this.removeMb(id);
                
            },
            
        }

    }
    

</script>