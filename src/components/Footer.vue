<template>
    <form novalidate @submit.prevent="onSubmit">
        <el-input placeholder="Start typing..." v-model="text" size="large"></el-input>
    </form>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {namespace} from 'vuex-class';
    import {CONVERSATION_MODULE} from "../store/conversation";
    import {CONVERSATION_ACTIONS} from "../store/conversation/types/conversation-actions";
    import {Speaker} from "../store/conversation/types/conversation-state";

    const {Action} = namespace(CONVERSATION_MODULE);

    @Component
    export default class Footer extends Vue {
        private text: string = '';

        @Action(CONVERSATION_ACTIONS.ADD_MESSAGE) add!: Function;

        onSubmit() {
            this.add({
                speaker: Speaker.user,
                payload: this.text
            });


            this.text = '';
        }
    }
</script>
