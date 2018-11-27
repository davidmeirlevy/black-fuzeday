<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";
	import {SELLER_ACTIONS} from './store/seller/types/seller-actions';

    @Component({
        components: {
        },
    })
    export default class App extends Vue {
		mounted() {
			this.$store.dispatch(SELLER_ACTIONS.FETCH_PRODUCTS);
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
