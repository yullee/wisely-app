<template>
  <!-- <div class="icon-container"> -->
    <img
      :src="require(`@/assets/img/${iconClass}`)"
      :class="[iconSize, iconColor]"
      alt="제품이미지"
    />
    <!-- <slot></slot>
  </div> -->
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    grey: {
      type: String,
      default: null,
    },
    xs: {
      type: String,
      default: null,
    },
    sm: {
      type: String,
      default: null,
    },
    smd: {
      type: String,
      default: null,
    },
    md: {
      type: String,
      default: null,
    },
    lg: {
      type: String,
      default: null,
    },
    extra: {
      type: String,
      default: null,
    },
    extralg: {
      type: String,
      default: null,
    },
    blue: {
      type: String,
      default: null,
    },
    white: {
      type: String,
      default: null,
    },
    black: {
      type: String,
      default: null,
    },
  },
  computed: {
    iconSize() {
      const {
        xs, sm, md, smd, lg, extra, extralg,
      } = this;
      if (xs) return 'xs';
      if (sm) return 'sm';
      if (smd) return 'smd';
      if (md) return 'md';
      if (lg) return 'lg';
      if (extra) return 'extra';
      if (extralg) return 'extralg';
      return 'default-size';
    },
    iconColor() {
      const {
        white, blue,
      } = this;
      if (blue) return 'blue';
      if (white) return 'white';
      return 'black';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

  .xs {
    width: 10px;
    height: 10px;
  }
  .sm {
    width: 16px;
    height: 15px;
  }
  .smd {
    width: 22px;
    height: 22px;
  }
  .md {
    width: 26px;
    height: 26px;
  }
  .lg {
    width: 100px;
    height: 100px;
  }
  .extra {
    width: 220px;
    height: 220px;
  }
  .extra {
    width: 220px;
    height: 220px;
  }
  .extralg {
    width: 400px;
    height: 400px;
  }
  .default-size {
    width: 60px;
    height: auto;
  }
  .blue {
    color: $blue;
  }
  .white {
    color: #fff;
  }
  .black {
    color: $black;
  }
</style>
