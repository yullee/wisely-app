<template>
  <v-flex column class="mypage">
    <v-flex row align-items-center justify-items-center>
      <router-link to="/mypage">
        <v-icon class="icon" name="chevron-left" />
      </router-link>
      <v-typography xs="extra" sm="extra" md="extra" lg="extra" extra="extra" light="light">
        <div class="ma-5">다음 배송 상품 변경</div>
      </v-typography>
    </v-flex>
    <current-product-list-edit />
    <add-product-list />
  </v-flex>
</template>

<script>
import addProductList from '@/views/AddProduct/AddProductList.vue';
import currentProductListEdit from '@/views/CurrentProductListEdit.vue';

export default {
  components: {
    addProductList,
    currentProductListEdit,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/color.scss';
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
