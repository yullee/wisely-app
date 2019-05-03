<template>
  <div id="app">
    <top-bar v-show="!mobile" />
    <top-bar-mobile v-show="mobile" />
    <v-flex id="nav">
      <div class="col-1">
        <side-bar v-show="!mobile" class="side" />
      </div>
      <div class="col-2">
        <side-bar-mobile v-show="mobile" class="side-mobile" />
        <v-flex
          align-items-center justify-content-center
          v-if="!isLoaded"
          :class="getSpinnerSize()"
        >
          <v-spinner />
        </v-flex>
        <transition name="component-fade" mode="out-in">
          <router-view v-if="isLoaded" :class="getSize()" class="main" />
        </transition>
      </div>
    </v-flex>
    <info-bar class="footer"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import topBar from '@/views/TopBar/TopBar.vue';
import topBarMobile from '@/views/TopBar/TopBarMobile.vue';
import sideBar from '@/views/SideBar/SideBar.vue';
import sideBarMobile from '@/views/SideBar/SideBarMobile.vue';
import infoBar from '@/views/InfoBar.vue';
import vSpinner from '@/components/UI/VSpinner/VSpinner.vue';

export default {
  components: {
    topBar,
    topBarMobile,
    sideBar,
    sideBarMobile,
    infoBar,
    vSpinner,
  },
  data() {
    return {
      breakpoint: window.innerWidth,
    };
  },
  computed: {
    ...mapState({
      isLoaded(state) {
        return state.loaded;
      },
      mobile(state) {
        return state.mobile;
      },
      member(state) {
        return state.member;
      },
      price(state) {
        return state.price;
      },
    }),
  },
  methods: {
    ...mapActions({
      setMember: 'setMember',
      setLoaded: 'setLoaded',
      setMobile: 'setMobile',
      setNavShow: 'setNavShow',
      setPrice: 'setPrice',
    }),
    getSize() {
      if (this.mobile) return 'mobile-view';
      return 'mypage-view';
    },
    getSpinnerSize() {
      if (this.mobile) return 'spinner-mobile';
      return 'spinner';
    },
  },
  created() {
    this.$http.get('https://wisely-app.firebaseio.com/members.json').then((res) => {
      let count = 1;
      let deliverablesCount = 1;
      const arr = [];
      const temp = [];
      // Get a res data from Firebase and assign a hashedKey to data in
      // eslint-disable-next-line
      for (const key in res.data) {
        // Replace key with normal nums
        // eslint-disable-next-line
        res.data[key].key = count++;
        // Assign key to hashedKey
        res.data[key].hashedKey = key;
        /* eslint-disable */
        for (const j in res.data[key].next_deliverables) {
          res.data[key].next_deliverables[j].key = deliverablesCount++;
          res.data[key].next_deliverables[j].hashedKey = j;
          temp.push(res.data[key].next_deliverables[j]);
        }
        res.data[key].next_deliverables = temp;
        arr.push(res.data[key]);
      }
      this.setMember(arr); // Set vuex teams data - original teams content
      this.member[0].next_deliverables.forEach(product => {
				this.setPrice(this.price + (product.product_price * product.product_quantity));
			});
    }).then(() => {
      this.setLoaded(true); // Track loading status to update spinner
    });
    this.breakpoint = window.innerWidth;
    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target;
      this.breakpoint = innerWidth;
      if (innerWidth < 768) {
        this.setMobile(true);
      } else {
        this.setMobile(false);
        this.setNavShow(false);
      }
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&subset=korean');

html, body {
  all: unset;
  height: 100%;
  background-color: #F6F6F6;
}

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
#nav {
  display: flex;
  height: 100vh;
  .col-1 {
    flex-direction: column;
    flex-grow: 0;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
    z-index: 3;
  }
  .col-2 {
    flex-direction: column;
    flex: 1;
    flex-grow: 5;
    overflow: auto;
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 300;
    font-size: 20px;
    &.router-link-active {
      color: #0096FF;
    }
  }
  .spinner {
    flex: 0.73;
    height: 100vh;
  }
  .spinner-mobile {
    flex: 1;
    height: 100vh;
  }
  .mypage-view {
    flex: 0.73;
    background-color: #F6F6F6;
  }
  .mobile-view {
    flex: 1;
    background-color: #F6F6F6;
  }
  .footer {
    overflow: auto;
  }
}
</style>
