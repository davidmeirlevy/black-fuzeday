<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>{{ speaker}}</span>
        </div>
        <el-row>
            <el-button v-for="choice in payload" @click="setCategory(choice.text)">{{choice.text}}</el-button>
        </el-row>
    </el-card>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
    import {namespace} from "vuex-class";
    import {SELLER_MODULE} from "../store/seller";
    import {SELLER_ACTIONS} from "../store/seller/types/seller-actions";
    const {Action} = namespace(SELLER_MODULE);

    @Component
	export default class Conversation extends Vue {
        @Prop() private speaker!: string;
        @Prop() private payload!: Array<any>;

        @Action(SELLER_ACTIONS.SET_CATEGORY) setCategory!: Function;

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
