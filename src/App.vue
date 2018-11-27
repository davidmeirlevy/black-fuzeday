<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";
    import {namespace} from "vuex-class";
    import {CONVERSATION_MODULE} from "./store/conversation";
    import {CONVERSATION_ACTIONS} from "./store/conversation/types/conversation-actions";
    import {SELLER_MODULE} from "./store/seller";
    import {SELLER_ACTIONS} from "./store/seller/types/seller-actions";
    import {MessageType} from "./store/conversation/types/conversation-state";
    const Conversation = namespace(CONVERSATION_MODULE);
	const Products = namespace(SELLER_MODULE);

    @Component({
        components: {
        },
    })
    export default class App extends Vue {
        @Conversation.Action(CONVERSATION_ACTIONS.ADD_MESSAGE) addMessage !: Function;
        @Products.Action(SELLER_ACTIONS.FETCH_PRODUCTS) fetchProducts !: Function;

		async mounted() {
		    this.addMessage({
				speaker: 'Bot',
				payload: 'What would you like to shop?'
			});

            await this.fetchProducts();

			this.addMessage({
				speaker: 'Bot',
				type: MessageType.choices,
				payload: [{text: 'Games'}, {text: 'Music'}]
			})

		}
    }
</script>
<style lang="scss" scoped>
	#app {
		max-width: 600px;
		margin: auto;
		font-family: Helvetica, Ariaßl, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
