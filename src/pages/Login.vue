<template>
    <q-page class="q-pa-md">
        
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
                @click="logIn"
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
            userIds: "",
            inputId: "",
            inputPw: "",
            dialog: false,
            mbdialog: false,
            
        }
    },

    components: {JoinMembership, DialogMember}, 

    computed: {
        
    },

    methods: {
        
        async logIn() {

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