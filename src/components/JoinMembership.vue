<template>
    <q-dialog v-model="dialog">
        <q-card class="q-dialog-plugin">
            <q-card-section>
                <div class="text-h6">회원가입</div>
            </q-card-section>
            <q-card-section class="row">
                <q-input 
                    class='q-ma-sm'
                    rounded 
                    standout 
                    v-model="DiInputId" 
                    label="id" />
                    <q-btn
                        unelevated
                        dense
                        color="grey"
                        label="중복검사"
                        @click="overlap(DiInputId)"
                    />
                <q-input 
                    class='q-ma-sm'
                    rounded 
                    standout 
                    v-model="DiInputPw" 
                    label="password" />
            </q-card-section>

            <q-card-actions align="right">
                <q-btn
                    class="aa"
                    color="grey"
                    unelevated
                    dense
                    label="가입"
                    @click="addUser"
                    
                />
                <q-btn
                unelevated
                dense
                color="grey"
                label="취소"
                @click="onCancelClick"
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
        emits: ['onInput'],

        data () {
            return {
                dialog: false,
                DiInputId: "",
                DiInputPw: "",
            }
        },

        computed: {
            ...mapState(useLoginStore, ["userIds"]),
        },

        mounted(){

        },

        watch: {

        },

        methods: {
            ...mapActions(useLoginStore, ["joinMb"]),
            async addUser() {
                if(this.DiInputId){
                    if(this.DiInputPw){
                        this.joinMb(this.DiInputId, this.DiInputPw);
                        this.dialog = false;
                        await this.$q.notify({
                            message: `${this.DiInputId}님 반갑습니다`,
                            icon:"home",
                            color: "primary",
                        });
                        this.DiInputId = '';
                        this.DiInputPw = '';
                    } else {
                        await this.$q.notify({
                            message: `비밀번호를 입력해주세요`,
                            icon:"warning",
                            color: "red",
                        });
                    }
                } else {
                    await this.$q.notify({
                        message: `id를 입력해주세요`,
                        icon:"warning",
                        color: "red",
                    });
                }
            },

            overlap(DiInputId){
                let olId = this.userIds.some(ids => {
                    return ids.useId === DiInputId;
                });
                if(olId === true){
                    
                    this.$q.notify({
                        message: `이미 존재합니다.`,
                        icon:"home",
                        color: "primary",
                    });
                } else {
                    this.$q.notify({
                        message: `사용 가능합니다.`,
                        icon:"home",
                        color: "primary",
                    });
                }
            },

            onCancelClick(){
                this.dialog = false;
                this.DiInputId = '';
                this.DiInputPw = '';
            },
        },

    }
</script>