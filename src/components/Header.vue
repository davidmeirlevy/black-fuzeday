<template>
    <h1>{{title}}</h1>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
		@Prop() private title!: string;
	}
</script>

<style scoped>

</style>
