<template>
    <Scroller>
        <el-card :body-style="{ padding: '5px', width: '100px' }" v-for="product in products">
            <img :src="product.images[0].src" class="image">
            <p>{{product.title}}</p>
        </el-card>
    </Scroller>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
    import Scroller from "./Scroller.vue";
    import {namespace} from "vuex-class";
    import {SELLER_MODULE} from "../store/seller";
    import {SELLER_GETTERS} from "../store/seller/types/seller-getters";
    const {Getter} = namespace(SELLER_MODULE);
    import Product = ShopifyBuy.Product;


    @Component({
        components: {
            Scroller
        }
    })
	export default class Products extends Vue {
        @Prop() private speaker!: string;
        @Prop() private payload!: string;
        @Getter(SELLER_GETTERS.GET_FILTERED_PRODUCTS) filteredProducts!: Array<Product>;

        private products:Array<Product> = [];

        mounted() {
            this.products = this.products.concat(this.filteredProducts);
        }

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
