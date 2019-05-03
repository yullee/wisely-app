<template>
  <v-flex row justify-content-center align-items-center class="container">
    <!-- <div class="input-field">
      <select v-model="selected" @change="routeChanged()" class="input-select">
        <option class="option-box" :selected="i === 0" v-for="(route, i) in routes" :key="i">
          <v-typography> {{ route.title }}</v-typography>
        </option>
        <v-icon name="arrow-down"></v-icon>
      </select>-->
    <div class="select-container">
      <multiselect @input="routeChanged()" v-model="selected"
        :options="routes" label="title"
        :allow-empty="false"
        :preselect-first="true"
        placeholder="마이페이지"
        class="select-menu"
        :hide-selected="true"
        select-label=""
      >
        <span slot="noResult">페이지가 존재하지 않습니다</span>
      </multiselect>
    </div>
  <!-- </div> -->
  </v-flex>
</template>

<script>
import routes from '@/assets/data/routes.json';

export default {
  data() {
    return {
      routes,
      selected: {
        path: '/mypage',
        title: '정기구매 관리',
      },
    };
  },
  methods: {
    routeChanged() {
      this.routes.map((route, i) => {
        if (route.title === this.selected.title) this.$router.push({ path: this.routes[i].path });
        return this.$router;
      });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
$color1: #ffffff;
$color2: #41B883;
$color3: #35495E;
$color4: #E8E8E8;
$color5: #999999;
$color6: #ADADAD;
$color7: #F3F3F3;
$color8: #FF6A6A;

$multiselectTagBgColor: $color3;
$multiselectTagIconColor: darken($color3, 20%);
$multiselectTagIconColorHover: darken($color3, 8%);

.container {
  height: 150px;
  background-color: $white;
  .select-container {
    width: 50%;
  }
  // select {
  //   width: auto;
  //   margin: 0;
  //   -webkit-box-sizing: border-box;
  //   -moz-box-sizing: border-box;
  //   box-sizing: border-box;
  //   -webkit-appearance: none;
  //   -moz-appearance: none;
  //   appearance: none;
  //   border: thin solid rgb(182, 182, 182);
  //   border-radius: 0px;
  //   background-color: $white;
  //   font: inherit;
  //   display: inline-block;
  //   line-height: 1.5em;
  //   padding: 0.5em 3.5em 0.5em 1em;

  //   background-image:
  //     linear-gradient(45deg, transparent 50%, gray 50%),
  //     linear-gradient(135deg, gray 50%, transparent 50%),
  //     linear-gradient(to right, rgb(182, 182, 182), rgb(182, 182, 182));
  //   background-position:
  //     calc(100% - 20px) calc(1em + 2px),
  //     calc(100% - 15px) calc(1em + 2px),
  //     calc(100% - 2.5em) 0.5em;
  //   background-size:
  //     5px 5px,
  //     5px 5px,
  //     1px 1.5em;
  //   background-repeat: no-repeat;
  //   .option-box {
  //     background: #ffffff!important;
  //     color: #000000;
  //     border-radius: 0px;
  //   }
  // }
  *:focus {
    outline: none;
  }
  .select-menu {
    border-radius: 0px;
  }
  .multiselect.invalid .multiselect__tags,
.multiselect.invalid .multiselect__tags span,
.multiselect.invalid .multiselect__tags input {
  background:red;
}
}
</style>
