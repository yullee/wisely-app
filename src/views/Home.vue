<template>
  <v-flex column class="home">
    <v-flex row align-items-center justify-items-center>
      <v-typography xs="lg-auto" sm="lg-auto" light="light">
        <div class="ma-5">정직한 가격, 독일산 면도날</div>
      </v-typography>
    </v-flex>
  </v-flex>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.home {
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
