<template>
    <q-page class="q-pa-md" v-model="show" >   
        <q-card-section class="row">
            <q-input 
                rounded 
                standout 
                v-model="inputId" 
                label="id" />
            <q-input 
                rounded 
                standout 
                v-model="inputPw" 
                label="password" />        
        </q-card-section>

        <q-card-section class="q-ml-lg">
            <q-btn
                @click="openDialog"
                class="glossy q-ma-sm"
                rounded 
                color="grey"
                label="회원가입" />
            <q-btn
                @click="logIn(inputId, inputPw)"
                class="glossy q-ma-sm"
                rounded 
                color="grey"
                label="로그인" /> 
            <q-btn
                @click="openDialogMember"
                class="glossy q-ma-sm"
                rounded 
                color="black"
                label="회원 목록" />       
        </q-card-section>

        
        
        <join-membership ref="dialog">
        </join-membership>

        <dialog-member ref="mbdialog">

        </dialog-member>
                
    </q-page>
</template>

<script>
import useLoginStore from "src/stores/login";
import { mapActions, mapState } from "pinia";
import JoinMembership from "src/components/JoinMembership.vue";
import DialogMember from "src/components/DialogMember.vue";

export default {
    name: 'Login',
    title: "Login",
    
    data() {
        return {
            show: true,
            hidden: false,
            inputId: "",
            inputPw: "",
            dialog: false,
            mbdialog: false,
            
        }
    },

    components: {JoinMembership, DialogMember}, 

    computed: {
        ...mapState(useLoginStore, ["userIds"]),

    },

    mounted(){
        this.listLogin();
    },

    methods: {
        ...mapActions(useLoginStore, ["listLogin"]),
        
        async logIn(inputId, inputPw) {
            let loginId = this.userIds.some(uids => {
                    return uids.useId === inputId && uids.usePw === inputPw;
                });
                if(loginId === true){
                    this.show = false;
                    console.log('안녕하세요')
                    this.inputId = "";
                    this.inputPw = "";
                } else {
                    await this.$q.notify({
                        message: `다시 입력해주세요`,
                        icon:"warning",
                        color: "red",
                    });
                    this.inputId = "";
                    this.inputPw = "";
                }
        },

        openDialog(){
            this.$refs.dialog.dialog = true;
        },

        openDialogMember(){
            this.$refs.mbdialog.mbdialog = true;
        },

    },
}
</script>

<style>

</style>