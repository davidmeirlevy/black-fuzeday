<template>
    <ul>
        <li v-for="item in messages" :key="$index">
            <component v-bind:is="item.type || 'Message'" :speaker="item.speaker" :payload="item.payload"></component>
        </li>
    </ul>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
    import {IMessageItem} from '../store/conversation/types/conversation-state';
    import Message from './Message.vue';

	@Component({
        components: {
            Message
        }
    })
	export default class Conversation extends Vue {
        @Prop() private messages!: Array<IMessageItem>;
	}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style-type: none;
        margin-bottom: 10px;
    }
    .box-card {
        border-radius: 20px;
        margin-left: 0;
        margin-right: 50px;
    }

    .box-right {
        text-align: right;
        margin-right: 0;
        margin-left: 50px;
    }
</style>
