<template>
  <div>
  <v-flex column class="mypage">
    <v-typography justify-items-center
      xs="extra" sm="extra" md="extra" lg="extra" extra="extra" light="light"
    >
      <div class="mt-5 mb-5">다음 배송 안내</div>
    </v-typography>
    <div>
      <v-flex class="mypage-info ml-2 mr-2" column>
        <v-flex class="mypage-row border-bottom" row justify-content-space-between>
          <v-flex row align-items-center>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
              <div class="left-title ml-4">결제 예정일</div>
            </v-typography>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" bold="bold">
              <div class="ml-4">{{ member[0].next_payment_date }}</div>
            </v-typography>
          </v-flex>
          <v-flex class="mr-2" align-items-center>
            <router-link to="/mypage/edit-next-payment-date">
              <v-icon class="icon" name="chevron-right" />
            </router-link>
          </v-flex>
        </v-flex>
        <v-flex class="mypage-row border-bottom" row justify-content-space-between>
          <v-flex row justify-items-start align-items-center>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
              <div class="left-title ml-4">배송 주기</div>
            </v-typography>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" bold="bold">
              <div class="ml-4">{{ member[0].billing_interval }}개월 마다</div>
            </v-typography>
          </v-flex>
          <v-flex class="mr-2" align-items-center>
            <router-link to="/mypage/change-billing-interval">
              <v-icon class="icon" name="chevron-right" />
            </router-link>
          </v-flex>
        </v-flex>
        <v-flex class="mypage-row border-bottom" row justify-content-space-between>
          <v-flex row align-items-center>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
              <div class="left-title ml-4">배송 주소</div>
            </v-typography>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" bold="bold">
              <div class="ml-4">{{ member[0].shipping_address.address }}</div>
            </v-typography>
          </v-flex>
          <v-flex class="mr-2" align-items-center>
            <router-link to="/mypage/update-shipping-address">
              <v-icon class="icon" name="chevron-right" />
            </router-link>
          </v-flex>
        </v-flex>
        <v-flex class="mypage-row" row justify-content-space-between>
          <v-flex row align-items-center>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
              <div class="left-title ml-4">결제 수단</div>
            </v-typography>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" bold="bold">
              <div class="ml-4 mr-1">{{ member[0].payment_method }}</div>
            </v-typography>
              <v-product-image icon-class="kakaopay_bi_yellow_btn.png" width="100px" />
          </v-flex>
          <v-flex class="mr-2" align-items-center>
            <router-link to="/mypage/change-payment-method">
              <v-icon class="icon" name="chevron-right" />
            </router-link>
          </v-flex>
        </v-flex>
      </v-flex>
    </div>
    <current-product-list />
    <add-product-list />
  </v-flex>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import products from '@/assets/data/products.json';
import addProductList from '@/views/AddProduct/AddProductList.vue';
import currentProductList from '@/views/CurrentProductList.vue';

export default {
  data() {
    return {
      products,
    };
  },
  components: {
    addProductList,
    currentProductList,
  },
  computed: {
    ...mapState({
      member(state) {
        return state.member;
      },
      isLoaded(state) {
        return state.loaded;
      },
    }),
  },
  methods: {
    productType(product) {
      if (product.product_type === 'simple') {
        return '1회 구매 추가';
      }
      return '정기구매 추가';
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.mypage {
  .left-title {
    display: flex;
    width: 80px;
  }
  .title {
    font-size: 30px;
    font-weight: 300;
  }
  .mypage-info {
    background-color: #fff;
    border: 1px solid rgb(182, 182, 182);
    border-radius: 1px;
    flex: 1;
    .border-bottom {
      border-bottom: 1px solid $grey;
    }
    .mypage-row {
      height: 80px;
    }
  }
}
.icon {
  color: $black;
}
.icon:hover {
  color: $blue;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>
