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
    const {Action} = namespace(CONVERSATION_MODULE);

    @Component({
        components: {
        },
    })
    export default class App extends Vue {
        @Action(CONVERSATION_ACTIONS.ADD_MESSAGE) addMessage !: Function;

		mounted() {
		    this.addMessage({
				speaker: 'Bot',
				payload: 'What would you like to shop?'
			})
		}
    }
</script>
<style lang="scss" scoped>
	#app {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
