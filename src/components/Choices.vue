<template>
    <el-card class="box-right">
        <div class="clearfix">
            <span>{{ speaker}}</span>
        </div>
        <el-row>
            <el-button v-for="choice in payload">{{choice.text}}</el-button>
        </el-row>
    </el-card>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";

	@Component
	export default class Conversation extends Vue {
        @Prop() private speaker!: string;
        @Prop() private payload!: string;

        get direction() {
            return this.speaker === 'User' && 'box-right';
        }
	}
</script>

<style scoped>
    .el-card {
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
