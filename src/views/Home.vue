<template>
    <Layout>
        <Conversation :messages="messages"></Conversation>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import Scroller from "@/components/Scroller.vue";
    import Conversation from '@/components/Conversation.vue';
    import {namespace} from "vuex-class";
    import {CONVERSATION_MODULE} from "../store/conversation";
    import {CONVERSATION_GETTERS} from "../store/conversation/types/conversation-getters";
    import {IMessageItem} from '../store/conversation/types/conversation-state';

    const {Getter} = namespace(CONVERSATION_MODULE);


    @Component({
        components: {
            Layout,
            Scroller,
            Conversation
        },
    })
    export default class Home extends Vue {
        @Getter(CONVERSATION_GETTERS.GET_MESSAGES) messages!: Array<IMessageItem>;

    }
</script>
<style lang="scss" scoped>
    .image {
        width: 100%;
        display: block;
    }

    .el-card {
        &:first-of-type {
            margin-left: 0;
        }

        &:last-of-type {
            margin-right: 0;
        }

        margin: 0 10px;
        display: inline-block;

        p {
            text-align: center;
        }
    }
</style>
