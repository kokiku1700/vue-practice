<template>
    안녕하세요. {{ Login.inputId }}님
</template>

<script>
import useLoginStore from "src/stores/login";
import Login from "./Login.vue";

export default {
    data(){
        return{
            computed: {
                ...mapState(useLoginStore, ["userIds"]),

            },
        }
    }
}
</script>

<style>

</style>