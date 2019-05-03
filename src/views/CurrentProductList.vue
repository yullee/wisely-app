<template>
  <v-flex>
    <v-flex class="mypage-info ma-2" column>
      <v-flex class="mypage-row" row justify-content-space-between>
          <v-flex row align-items-center>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
              <div class="ml-4">결제 예정 상품</div>
            </v-typography>
          </v-flex>
          <v-flex class="mr-2" align-items-center>
            <router-link to="/mypage/edit-next-deliverables">
              <v-icon class="icon" name="chevron-right" />
            </router-link>
          </v-flex>
        </v-flex>
      <v-flex v-if="member[0].next_deliverables.length === 0">
        <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md">결제 예정 상품 없음</v-typography>
      </v-flex>
        <v-flex column class="single-item"
          v-for="(product, i) in member[0].next_deliverables"
          :key="i"
        >
        <v-flex class="mt-2 mb-2"
          row justify-content-space-between align-items-center
        >
          <v-flex row align-items-center>
            <v-product-image class="ml-3 mr-2" :icon-class="product.product_img" lg="lg"/>
            <v-flex column align-items-start>
              <v-typography xs="md" sm="md" md="lg" lg="lg" extra="lg" light="light">
                {{ product.product_name }}
              </v-typography>
              <v-flex row>
                <v-typography xs="xs" sm="xs" md="sm" lg="sm" extra="sm" light="light">
                  {{ `${product.product_price.toLocaleString()} 원&nbsp` }}
                </v-typography>
                <v-typography v-if="product.product_type === 'simple'" xs="xs" sm="xs" md="sm" lg="sm" extra="sm" light="light">
                  {{ `/ ${product.product_quantity}개` }}
                </v-typography>
              </v-flex>
            </v-flex>
          </v-flex>
          <v-flex align-items-center row class="mr-4">
            <v-icon v-if="product.product_type === 'variable-subscription'" class="ml-1 mr-1 icon" name="sync"></v-icon>
            <v-typography xs="xs" sm="xs" md="sm" lg="md" extra="md" dark-grey="dark-grey" light="light">
              {{ productType(product) }}
            </v-typography>
          </v-flex>
          
        </v-flex>
        <v-flex column>
            <!-- If shave gel is subscribed, diplay  -->
      <v-flex v-if="subscription && product.product_id === '3291'" class="mr-4 mb-2" row justify-content-end align-items-center>
        <v-typography xs="xs" sm="xs" md="sm" lg="sm" extra="sm">
          <div class="mr-2">아직 남아있나요?</div>
        </v-typography>
        <v-typography xs="xs" sm="xs" md="sm" lg="sm" extra="sm" blue="blue">
          <div class="skip" @click="skipOrder()">이번 배송 건너 뛰기</div>
        </v-typography>
      </v-flex>
      </v-flex>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      setSubscription: 'setSubscription',
    }),
    productType(product) {
      if (product.product_type === 'simple') return '1회 구매';
      // 쉐이빙 젤
      if (product.product_id === '3291') this.setSubscription(true);
      return '정기구매';
    },
    skipOrder() {
      alert('기능 준비중입니다.');
    },
  },
  computed: {
    ...mapState({
      member(state) {
        return state.member;
      },
      subscription(state) {
        return state.subscription;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.mypage-info {
  background-color: $white;
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
.skip {
  box-sizing: border-box;
  border: 1px solid #0096FF;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
}
.single-item {
  border-bottom: 1px solid $grey;
}
</style>
