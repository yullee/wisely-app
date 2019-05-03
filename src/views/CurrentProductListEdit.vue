<template>
  <v-flex>
    <v-flex class="mypage-info ma-2" column>
      <v-flex class="mypage-row" row justify-content-space-between>
          <v-flex row align-items-center>
            <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
              <div class="ml-4">배송 상품</div>
            </v-typography>
          </v-flex>
        </v-flex>
      <v-flex v-if="member[0].next_deliverables.length === 0">
        <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md">배송 상품 없음</v-typography>
      </v-flex>
    <v-flex column class="border-bottom"
      v-for="(product, i) in member[0].next_deliverables"
      :key="i">
      <v-flex v-if="product.product_id !== '3079'" class="mr-4 mt-2" column align-items-end>
        <v-icon @click.native="deleteItem(product)" class="times" name="times" />
      </v-flex>
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
                <v-flex class="input-box" v-show="product.product_type === 'simple'" align-items-center>
                <input type="number" :value="product.product_quantity"
                  min=1
                  @change="(e) => updateProductQuantity(e, product)">
                </v-flex>
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
      <v-flex justify-items-center class="mt-2 mb-2">
        <v-typography
          xs="sm" sm="sm" md="md" lg="md" extra="md" light="light">
          상품 합계 금액:&nbsp
        </v-typography>
        <v-typography
          xs="sm" sm="sm" md="md" lg="md" extra="md">
          {{ price.toLocaleString() }} 원
        </v-typography>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    ...mapActions({
      setMember: 'setMember',
      setSubscription: 'setSubscription',
      setQuantity: 'setQuantity',
      setPrice: 'setPrice',
    }),
    productType(product) {
      if (product.product_type === 'simple') return '1회 구매';
      // 쉐이빙 젤
      if (product.product_id === '3291') this.setSubscription(true);
      return '정기구매';
    },
    removeNotified(name) {
      this.$toasted.show(`${name} 장바구니 삭제 완료`, {
        theme: 'toasted-primary',
        position: 'top-left',
      });
    },
    deleteItem(product) {
      this.$http.delete(`https://wisely-app.firebaseio.com/members/0/next_deliverables/${product.hashedKey}.json`).then((res) => {
        if (res.status === 200) {
          const nextProducts = [...this.member];
          nextProducts[0].next_deliverables = this.member[0].next_deliverables.filter(deliverable => deliverable.key !== product.key);
          this.setMember = nextProducts;
          this.removeNotified(product.product_name);
          this.setPrice(0);
          if (product.product_id === '3291') this.setSubscription(false);
          this.member[0].next_deliverables.forEach((product) => {
            this.setPrice(this.price + (product.product_price * product.product_quantity));
          });
        }
      });
    },
    increaseQuantity() {
      this.setQuantity(this.value += 1);
    },
    decreaseQuantity() {
      if (this.value > 1) this.setQuantity(this.value -= 1);
    },
    minimum() {
      if (this.value === 1) return 'disabled';
      return 'enabled';
    },
    updateProductQuantity(e, item) {
      this.setMember = this.member[0].next_deliverables.map((product) => {
        if (product.key === item.key) {
          product.product_quantity = e.target.value;
          const firebase = `https://wisely-app.firebaseio.com/members/0/next_deliverables/${product.hashedKey}/product_quantity.json`;
          this.$http.put(firebase, product.product_quantity).then((res) => {
            if (res.status === 200) {
              this.addNotified(product.product_name);
              this.setPrice(0);
              this.member[0].next_deliverables.forEach((product) => {
                this.setPrice(this.price + (product.product_price * product.product_quantity));
              });
            }
          });
        }
        return product;
      });
    },
    addNotified(name) {
      this.$toasted.show(`${name}의 수량이 변경 되었습니다.`, {
        theme: 'toasted-primary',
        position: 'top-left',
      });
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
      quantity(state) {
        return state.quantity;
      },
      price(state) {
        return state.price;
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
  .border-bottom {
    border-bottom: 1px solid $grey;
  }
}
.icon {
  color: $blue;
}
.icon:hover {
  color: $black;
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
.times {
  color: $timesgrey;
  cursor: pointer;
}
.disabled {
  color: $grey;
}
.enabled {
  cursor: pointer;
}
.enabled:hover {
  color: $blue;
}
.input-box {
  border: 1px solid $grey;
  // border-radius: 7px;
  .quantity-input {
    font-size: 21px;
    // width: 50px;
    height: 50px;
    text-align: center;
    outline: none;
    border: none;
  }
}
input[type=number] {
  outline: none;
  border: 0;
  text-align: center;
  line-height: 25px;
  width: auto;
}
input[type=number]::-webkit-inner-spin-button {
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: block;
  color: #333;
  position: relative;
}
</style>
