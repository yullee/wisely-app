<template>
  <v-flex class="mypage-side" column align-items-center>
    <v-flex column align-items-end class="mt-5 mb-5 mypage-title">
      마이페이지
    </v-flex>
    <v-flex class="links" column align-items-end>
      <router-link class="mb-3 current-page" to="/mypage"
        :active-class="routeColor($route.path)">정기구매 관리</router-link>
      <router-link class="mb-3" to="/mypage/orders-on-process" exact>주문내역 조회</router-link>
      <router-link class="mb-3" to="/mypage/myinfo" exact>정보 수정</router-link>
      <router-link class="mb-3" to="/" exact>로그아웃</router-link>
    </v-flex>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      mobile(state) {
        return state.mobile;
      },
    }),
  },
  methods: {
    routeColor(path) {
      if (path === '/mypage/orders-on-process') return '';
      if (path === '/mypage/myinfo') return '';
      return 'router-link-active';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.mypage-side {
  background-color: $white;
  width: 250px;
  .mypage-title {
    font-weight: 500; //medium
    font-size: 30px;
  }
}
</style>
