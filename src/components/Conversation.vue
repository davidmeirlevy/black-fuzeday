<template>
    <ul>
        <li v-for="item in messages" :key="$index">
            <el-card v-bind:class="userMessage(item.speaker)" class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ item.speaker}}</span>
            </div>
            {{ item.payload }}
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
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style-type: none;
        margin-bottom: 10px;
    }
    .box-card {
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
