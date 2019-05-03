<template>
<nav-modal v-if="navShow">
  <template slot="modal-text">
    <v-flex class="container" column justify-content-center align-items-center>
      <!-- 로고 -->
      <a class="logo mt-2" href="https://www.wiselyshave.com/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 47" id="logo" width="100px" height="40px">
          <g>
            <path d="M.213 15.352h5.236l5.235 11.484 5.7-13.299 5.7 13.299 5.194-11.484h5.192L21.957 36.968l-5.573-12.96-5.657 12.96L.213 15.352zM40.875 4.923c2.027 1.688.465 5.277-2.068 5.151a3.029 3.029 0 0 1-3.041-3.041c-.127-2.532 3.42-4.053 5.109-2.11zm-4.434 10.429h4.644V35.45h-4.644V15.352zM55.652 20.84c-.59-1.224-1.351-1.858-2.238-1.858-.844 0-1.562.675-1.562 1.521 0 .675.887 1.435 2.703 2.279l1.773.845c3.336 1.562 4.434 2.998 4.434 5.657 0 1.941-.676 3.547-2.069 4.856-1.393 1.265-3.082 1.899-5.067 1.899-3.419 0-5.783-1.647-7.177-4.94l3.969-1.815c1.14 2.026 1.858 2.619 3.251 2.619 1.562 0 2.364-.719 2.364-2.154 0-.972-.591-1.731-1.815-2.322l-2.575-1.225c-3.04-1.478-4.138-2.702-4.138-5.362 0-1.731.592-3.166 1.816-4.307 1.225-1.14 2.702-1.731 4.433-1.731 2.575 0 4.476 1.309 5.742 3.969l-3.844 2.069zM84.11 26.498H69.713c.296 3.251 2.238 5.405 5.236 5.405 1.14 0 2.11-.254 2.829-.804.759-.548 1.604-1.562 2.575-3.082l3.926 2.154c-2.364 4.094-5.277 5.868-9.499 5.868-2.999 0-5.405-.972-7.22-2.914-1.815-1.941-2.702-4.517-2.702-7.684 0-3.208.887-5.785 2.617-7.726 1.772-1.943 4.138-2.914 7.052-2.914 5.952 0 9.583 4.137 9.583 10.598v1.099zm-4.77-3.8c-.634-2.491-2.196-3.716-4.688-3.716-2.236 0-4.095 1.478-4.644 3.716h9.332zM89.518.616h4.645v26.009c0 1.941.295 3.293.844 4.095.55.761 1.52 1.141 2.913 1.141l-1.267 4.18c-2.321 0-4.137-.718-5.447-2.195-1.14-1.226-1.688-3.293-1.688-6.123V.616zM101.508 46.384l7.811-14.651-9.035-16.381h5.404l6.122 11.569 5.742-11.569h5.235l-16.002 31.032h-5.277z"/>
          </g>
        </svg>
      </a>
      <ul>
        <li class="border-top">
          <router-link @click.native="close()" to="/store">
            <v-flex align-items-center justify-items-center>
              <v-icon class="mr-1" name="shopping-bag" />
              <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md" bold="bold">스토어</v-typography>
            </v-flex>
          </router-link>
        </li>
        <li>
          <router-link @click.native="close()" to="/mypage">
            <v-flex align-items-center justify-items-center>
              <v-icon class="mr-1" name="sync" />
              <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md" bold="bold">정기구매</v-typography>
            </v-flex>
          </router-link>
        </li>
        <li>
          <router-link @click.native="close()" to="/mypage">
            <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md">브랜드 스토리</v-typography>
          </router-link>
        </li>
        <li>
          <router-link @click.native="close()" to="/mypage">
            <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md">고객센터</v-typography>
          </router-link>
        </li>
        <li>
          <router-link @click.native="close()" to="/mypage">
            <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md">마이페이지</v-typography>
          </router-link>
        </li>
        <li>
          <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md" light="light"><div class="mt-2">{{ member[0].email }}</div></v-typography>
          <router-link @click.native="close()" to="/">
            <v-typography xs="xs" sm="sm" md="sm" lg="sm" extra="md" light="light"><div>로그아웃</div></v-typography>
          </router-link>
        </li>
      </ul>
    </v-flex>
  </template>
</nav-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import navModal from '@/components/UI/NavModal/NavModal.vue';

export default {
  components: {
    navModal,
  },
  computed: {
    ...mapState({
      navShow(state) {
        return state.navShow;
      },
      member(state) {
        return state.member;
      },
    }),
  },
  methods: {
    ...mapActions({
      setNavShow: 'setNavShow',
    }),
    close() {
      this.setNavShow(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.container {
  display: flex;
  flex: 1;
  ul {
    width: 100%;
    flex-direction: column;
    padding: 0;
    .border-bottom {
      border-bottom: 1px solid rgb(182, 182, 182);
    }
    li {
      list-style-type: none;
      list-style-position: inside;
      border-top: 1px solid rgb(182, 182, 182);
      height: 50px;
      line-height: 50px;
      a {
        color: #333333;
        text-decoration: none;
      }
    }
  }
  *:focus {
    outline: none;
  }
}
</style>
