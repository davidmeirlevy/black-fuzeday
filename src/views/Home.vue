<template>
    <Layout>
        Main

        <Scroller>
            <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in 50">
                <img src="https://picsum.photos/100/100" class="image">
                <p>Product title</p>
            </el-card>
        </Scroller>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import Scroller from "@/components/Scroller.vue";

    @Component({
        components: {
            Layout,
            Scroller
        },
    })
    export default class Home extends Vue {
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
