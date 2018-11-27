<template>
    <Scroller>
        <el-card :body-style="{ padding: '0px' }" v-for="product in products">
            <img :src="product.images[0].src" class="image">
            <p>{{product.title}}</p>
        </el-card>
    </Scroller>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
    import Scroller from "Scroller.vue";

	@Component({
        components: {
            Scroller
        }
    })
	export default class Conversation extends Vue {
        @Prop() private speaker!: string;
        @Prop() private payload!: string;

        get direction() {
            return this.speaker === 'User' && 'box-right';
        }
	}
</script>

<style lang="scss" scoped>
    .image {
        width: 100%;
        display: block;
    }

    .el-card {
        &:first-of-type {
            margin-left: 0;
        }

        &:last-of-type {
            margin-right: 0;
        }

        margin: 0 10px;
        display: inline-block;

        p {
            text-align: center;
        }
    }
</style>
