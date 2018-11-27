<template>
    <div class="wrapper">
        <div class="container"><slot></slot></div>
    </div>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

	@Component
	export default class Scroller extends Vue {
	}
</script>

<style lang="scss" scoped>
    .wrapper {
    }

    .container {
        white-space: nowrap;
        overflow-y: scroll;
    }
</style>
