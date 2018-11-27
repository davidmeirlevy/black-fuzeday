<template>
    <el-container>
        <el-header><Header title="Black FuzeDay" /></el-header>
        <el-main>
          <Conversation :messages = "[
            {author: 'Bot', message: 'Hello'}, 
            {author: 'User', message: 'I want to buy boots'}, 
            {author: 'Bot', message: 'Kill all humans'}, 
            {author: 'User', message: 'Oh no'}
        ]"></Conversation>
        </el-main>
        <el-footer height="40px"><Footer /></el-footer>
    </el-container>
</template>


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Conversation from './Conversation.vue';

    @Component({
        components: {
            Header,
            Footer,
            Conversation
        }
    })
    export default class Layout extends Vue {
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #F2F6FC;
        color: #333;
        text-align: center;
        padding: 0;
    }

    .el-main {
        background-color: #C0C4CC;
        color: #333;
    }

    .el-container {
        height: 100vh;
    }
</style>
