<template>
    <el-input placeholder="Start typing..." v-model="input" size="large"></el-input>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
	}
</script>

<style lang="scss" scoped>
</style>
