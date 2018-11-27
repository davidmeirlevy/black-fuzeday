<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>{{ speaker}}</span>
        </div>

        <h3>{{payload.title}}</h3>

        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="image in payload.images">
                <img :src="image.src" alt="">
            </el-carousel-item>
        </el-carousel>

        <p>{{payload.description}}</p>
    </el-card>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
    @Component
	export default class Products extends Vue {
        @Prop() private speaker!: string;
        @Prop() private payload!: object;
    }
</script>

<style lang="scss" scoped>
    img {

        width: 100%;
        height: 100%;
    }
</style>
