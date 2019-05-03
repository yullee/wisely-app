<template>
  <v-flex column class="edit-next-payment-date">
    <v-flex row align-items-center justify-items-center>
      <router-link to="/mypage">
        <v-icon class="icon" name="chevron-left" />
      </router-link>
      <v-typography xs="extra" sm="extra" md="extra" lg="extra" extra="extra" light="light">
        <div class="ma-5">정기구매 배송 주기 변경</div>
      </v-typography>
    </v-flex>
  </v-flex>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.edit-next-payment-date {
  height: 100vh;
  font-size: 30px;
  font-weight: 300;
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
}
</style>
