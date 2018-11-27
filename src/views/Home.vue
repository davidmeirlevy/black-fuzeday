<template>
    <Layout>
        Main
          <Conversation :messages = "[
            {type: 'Bot', message: 'Hello'}, 
            {type: 'User', message: 'I want to buy boots'}, 
            {type: 'Bot', message: 'Kill all humans'}, 
            {type: 'User', message: 'Oh no'}
        ]"></Conversation>
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
    import Conversation from '@/components/Conversation.vue';

    @Component({
        components: {
            Layout,
            Scroller,
            Conversation
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
