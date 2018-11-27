<template>
    <ul>
        <li v-for="item in messages">
            <component v-bind:is="item.type || 'Message'" :speaker="item.speaker" :payload="item.payload"></component>
        </li>
    </ul>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
    import {IMessageItem} from '../store/conversation/types/conversation-state';
    import Message from './Message.vue';
    import Choices from './Choices.vue';
    import Products from './Products.vue';
    import Product from './Product.vue';

	@Component({
        components: {
            Message,
            Choices,
            Products,
            Product
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
</style>
