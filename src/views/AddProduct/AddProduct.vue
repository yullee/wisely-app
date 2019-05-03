<template>
  <app-modal
    v-show="show"
    @close="show = false"
  >
  <template slot="modal-text">
    <v-flex justify-items-end>
      <v-icon type="button" class="mr-1 mb-1 times" @click.native="close"
        name="times">
      </v-icon>
    </v-flex>
    <div :class="mobile ? 'mobile-container' : 'web-container'">
    <v-flex :class="mobile ? '' : 'slider-container'" column>
      <Slider v-if="selectedProduct === 0"
        animation="fade"
        v-model="sliderIndex"
        :duration="5000"
        :speed="1000"
        :autoplay="false"
        :height="mobile ? '200px' : '400px'"
        :width="mobile ? '200px' : '400px'"
      >
        <SliderItem
        v-for="(product, i)
            in products.add_products[selectedProduct].product_navy[originalColor]"
          :key="i"
          :style="i"
        >
          <v-product-image v-show="!mobile" :icon-class="product" extralg="extralg"/>
          <v-product-image v-show="mobile" :icon-class="product" extra="extra"/>
        </SliderItem>
      </Slider>

      <Slider v-if="selectedProduct === 1"
          animation="fade"
          v-model="sliderIndex"
          :duration="5000"
          :speed="1000"
          :height="mobile ? '200px' : '400px'"
          :width="mobile ? '200px' : '400px'"
        >
        <SliderItem
        v-for="(product, i)
            in products.add_products[selectedProduct].product_gel"
          :key="i"
          :style="i"
        >
           <v-product-image v-show="!mobile" :icon-class="product" extralg="extralg"/>
          <v-product-image v-show="mobile" :icon-class="product" extra="extra"/>
        </SliderItem>
      </Slider>

      <Slider v-if="selectedProduct === 2"
          animation="fade"
          v-model="sliderIndex"
          :duration="5000"
          :speed="1000"
          :height="mobile ? '200px' : '400px'"
          :width="mobile ? '200px' : '400px'"
        >
        <SliderItem
          v-for="(product, i)
            in products.add_products[selectedProduct].product_starter"
          :key="i"
          :style="i"
        >
           <v-product-image v-show="!mobile" :icon-class="product" extralg="extralg"/>
          <v-product-image v-show="mobile" :icon-class="product" extra="extra"/>
        </SliderItem>
      </Slider>
    </v-flex>
    <v-flex class="info-container" column justify-content-center align-content-center>
      <v-typography
        xs="lg" sm="lg" md="extra" lg="extra" extra="extra"
        bold="bold"
      >
        <div class="mt-1">
          {{ products.add_products[selectedProduct].product_name[originalColor]}}
        </div>
      </v-typography>

      <v-typography xs="sm" sm="sm" md="md" lg="md" extra="md" bold="bold">
        <div class="mt-1 mb-1">
          {{ `${products.add_products[selectedProduct].product_price.toLocaleString()} 원` }}
        </div>
      </v-typography>
      <!-- 색상 변경 -->
      <v-flex row justify-items-center v-show="selectedProduct === 0">
        <div v-for="(color, i) in products.add_products[selectedProduct].product_color"
          :key="i"
          class="color-box ma-1"
          :style="{ backgroundColor: color }"
          @click.prevent="updateColor(color)"
          :class="updateSelected(color)"
        >
        </div>
      </v-flex>
        <ul class="ul mt-1">
          <v-flex column align-items-start>
          <li
            v-for="(desc, i) in products.add_products[selectedProduct].product_desc"
            :key="i"
            class="mt-1"
          >
          <v-typography
            xs="sm" sm="sm" md="md" lg="md" extra="md"
            light="light"
          >
            {{ desc }}
          </v-typography>
          </li>
            </v-flex>
        </ul>
    <div :class="mobile ? 'mobile-info' : 'web-info'" class="mt-2">
    <v-input
      class="mb-1"
      :width="mobile ? '80%' : '99%'"
      v-show="products.add_products[selectedProduct].product_type === 'simple'"
    />
    <v-button
      type="submit"
      @click.native="addToCart(selectedProduct)"
      xs="lg-button" sm="lg-button" md="lg-button"
      lg="lg-button" extra="lg-button"
    >
      <v-typography
        xs="sm" sm="sm" md="md" lg="md" extra="md" style="color: #fff"
      >
        {{ productType(products.add_products[selectedProduct]) }}
      </v-typography>
    </v-button>
    </div>
    </v-flex>
      </div>
  </template>
</app-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import products from '@/assets/data/products.json';
import appModal from '@/components/UI/AppModal/AppModal.vue';

export default {
  components: {
    appModal,
  },
  props: {
    selectedProduct: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      products,
      value: 0,
      product: [],
      originalColor: 0,
      colorName: '#375e77',
      sliderIndex: 0,
      screen: this.mobile ? '200px' : '200px',
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
      mobile(state) {
        return state.mobile;
      },
      price(state) {
        return state.price;
      },
    }),
  },
  methods: {
    ...mapActions({
      setMember: 'setMember',
      setQuantity: 'setQuantity',
      setShow: 'setShow',
      setNewQuantity: 'setNewQuantity',
      setPrice: 'setPrice',
    }),
    updateColor(color) {
      if (color === '#375e77') {
        this.sliderIndex = 0;
        this.originalColor = 0;
      } else if (color === '#a12c36') {
        this.sliderIndex = 0;
        this.originalColor = 1;
      } else {
        this.originalColor = 2;
        this.sliderIndex = 0;
      }
      this.colorName = color;
      return this.originalColor;
    },
    updateSelected(color) {
      if (color === this.colorName) {
        return 'color-selected';
      }
      return '';
    },
    productType(product) {
      if (product.product_type === 'simple') return '1회 구매 추가';
      return '정기구매 추가';
    },
    viewProduct(i) {
      this.selectedProduct = i;
      this.setShow(true);
    },
    addToCart(selectedProduct) {
      this.setShow(false); // Close the modal
      const temp = products.add_products[selectedProduct];
      this.setMember = this.member[0].next_deliverables.map((product) => {
        if (product.product_id === temp.product_id[this.originalColor]) {
          product.product_quantity += this.quantity;
          const firebase = `https://wisely-app.firebaseio.com/members/0/next_deliverables/${product.hashedKey}/product_quantity.json`;
          this.$http.put(firebase, product.product_quantity).then((res) => {
            if (res.status === 200) {
              this.addNotified(product.product_name);
              this.setPrice(0);
              this.member[0].next_deliverables.forEach((product) => {
                this.setPrice(this.price + (product.product_price * product.product_quantity));
              });
            };
          });
        }
        return product;
      });
      if (this.member[0].next_deliverables.filter(product => product.product_id === temp.product_id[this.originalColor]).length === 0) {
        const data = {
          product_id: temp.product_id[this.originalColor],
          product_img: temp.product_thumb[this.originalColor],
          product_name: temp.product_name[this.originalColor],
          product_price: temp.product_price,
          product_quantity: this.quantity,
          product_type: temp.product_type,
        };
        this.$http.post('https://wisely-app.firebaseio.com/members/0/next_deliverables.json', data).then((res) => {
          if (res.status === 200) {
            const nextProducts = [...this.member];
            nextProducts[0].next_deliverables.push(data);
            this.setMember = nextProducts;
            this.newNotified(data.product_name);
            this.setPrice(0);
            this.member[0].next_deliverables.forEach((product) => {
              this.setPrice(this.price + (product.product_price * product.product_quantity));
            });
          }
        });
      }
      this.setQuantity(1);
      this.setNewQuantity(1);
      this.originalColor = 0;
      this.colorName = '#375e77';
    },
    newNotified(name) {
      this.$toasted.show(`${name} 추가 되었습니다.`, {
        theme: 'toasted-primary',
        position: 'top-left',
      });
    },
    addNotified(name) {
      this.$toasted.show(`${name}의 수량이 변경 되었습니다.`, {
        theme: 'toasted-primary',
        position: 'top-left',
      });
    },
    close() {
      this.setShow(false);
      this.setQuantity(1);
      this.setNewQuantity(1);
      this.originalColor = 0;
      this.colorName = '#375e77';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.times {
  color: $timesgrey;
  cursor: pointer;
}
  ul {
    padding: 0;
    color: #666666;
    font-weight: 300;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    li {
      // remove indentation
      list-style-position: inside;
    }
  }
  *:focus {
    outline: none;
  }
  .color-box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5);
  }
.slider-indicator-active {
  background-color: #333333 !important;
}
.slider {
  width: 400px;
}
.mobile-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.web-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.mobile-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.web-info {

}
.slider-container {
  margin-right: 30px;
}
.slider-web {
  width: 400px;
  height: 400px;
}
.slider-mobile {
  width: 200px;
  height: 200px;
}
.info-container {
  // flex: 0.4;
  margin: 0;
  padding: 0;
}
.footer {
  flex: 0.6
}
.color-selected {
  border: 2px solid $blue;
  box-shadow: none;
  cursor: pointer;
}
</style>
