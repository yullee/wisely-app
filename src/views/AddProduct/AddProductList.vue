<template>
  <v-flex>
    <v-flex class="mypage-info ml-2 mr-2 mb-4" column>
      <v-flex class="mypage-row" row align-items-center>
        <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
          <div class="ml-4">상품을 추가해 보세요</div>
        </v-typography>
      </v-flex>
      <div v-for="(product, i) in products.add_products"
        :key="i">
      <v-flex class="mt-2 mb-2"
        row justify-content-space-between align-items-center
        v-if="!(product.product_id[0] === '3291' && subscription)"
      >
        <v-flex row align-items-center>
          <v-product-image class="ml-3 mr-2" :icon-class="product.product_thumb[0]" lg="lg"/>
          <v-flex column align-items-start>
            <v-typography xs="md" sm="md" md="lg" lg="lg" light="light">
              {{ product.product_name[0] }}
            </v-typography>
            <v-typography xs="xs" sm="xs" md="sm" lg="sm" extra="sm" light="light">
              {{ `${product.product_price.toLocaleString()} 원` }}
            </v-typography>
          </v-flex>
        </v-flex>
        <v-button @click.native="viewProduct(i)" class="mr-4"
          xs="xs-button" sm="sm-button" md="md-button"
          lg="lg-button" extra="extra-button"
        >
          <v-typography xs="xs" sm="xs" md="xs" lg="sm" extra="md">
            {{ productType(product) }}
          </v-typography>
        </v-button>
      </v-flex>
      </div>
    </v-flex>
    <!-- 상품 추가 모달 -->
    <add-product :selectedProduct="selectedProduct" />
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import products from '@/assets/data/products.json';
import addProduct from '@/views/AddProduct/AddProduct.vue';

export default {
  components: {
    addProduct,
  },
  data() {
    return {
      products,
      value: 0,
      selectedProduct: 0,
      product: [],
      originalColor: 0,
      colorName: '#375e77',
    };
  },
  computed: {
    ...mapState({
      member(state) {
        return state.member;
      },
      quantity(state) {
        return state.quantity;
      },
      show(state) {
        return state.show;
      },
      subscription(state) {
        return state.subscription;
      },
      mobile(state) {
        return state.mobile;
      },
    }),
  },
  methods: {
    ...mapActions({
      setMember: 'setMember',
      setQuantity: 'setQuantity',
      setShow: 'setShow',
    }),
    productType(product) {
      if (product.product_type === 'simple') return '1회 구매 추가';
      return '정기구매 추가';
    },
    viewProduct(i) {
      this.selectedProduct = i;
      this.setShow(true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.mypage-info {
  background-color: #fff;
  border: 1px solid rgb(182, 182, 182);
  flex: 1;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  .mypage-row {
    border-bottom: $grey 1px solid;
    height: 80px;
  }
}
*:focus {
  outline: none;
}
</style>
