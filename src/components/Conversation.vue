<template>
    <ul>
        <li v-for="item in messages">
            <el-card v-bind:class="userMessage(item.author)" class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ item.author}}</span>
            </div>
            {{ item.message }}
            </el-card>
            </li>
    </ul>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";

	@Component
	export default class Conversation extends Vue {
        @Prop() private messages!: Array<any>;
        
        userMessage(sender: string) {
            return sender === 'User' && 'box-right';
        }
	}
</script>

<style scoped>
    li {
        list-style-type: none;
        margin-bottom: 10px;
    }
    .box-card {
        border-radius: 20px;
    }

    .box-right {
        text-align: right;
    }
</style>
