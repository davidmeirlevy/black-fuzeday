<template>
    <div>
        <Header title="Hello I'm A header"></Header>
        <Conversation :messages = "[
            {author: 'Bot', message: 'Hello'}, 
            {author: 'User', message: 'I want to buy boots'}, 
            {author: 'Bot', message: 'Kill all humans'}, 
            {author: 'User', message: 'Oh no'}
        ]"></Conversation>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Header from '@/components/Header.vue';
    import Conversation from '@/components/Conversation.vue';

    @Component({
        components: {
            Header,
            Conversation,
        },
    })

    export default class Components extends Vue {
    }
</script>

<style scoped>

</style>
