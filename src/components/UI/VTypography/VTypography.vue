<template>
  <!-- Set font size, weight and color -->
  <!-- Auto resize on window size change -->
  <span
    :class="[typographyClass, typographyWeight, typographyColor]"
    :style="{ width: width }"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
const getDefaultClass = () => 'default-typography';
const getXs = component => (component.xs ? component.xs : getDefaultClass(component));
const getSm = component => (component.sm ? component.sm : getXs(component));
const getMd = component => (component.md ? component.md : getSm(component));
const getLg = component => (component.lg ? component.lg : getLg(component));
const getExtra = component => (component.extra ? component.extra : getLg(component));

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    xs: {
      type: String,
      default: null,
    },
    sm: {
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
    width: {
      type: String,
      default: 'auto',
    },
    bold: {
      type: String,
      default: null,
    },
    light: {
      type: String,
      default: null,
    },
    regular: {
      type: String,
      default: null,
    },
    grey: {
      type: String,
      default: null,
    },
    lightgrey: {
      type: String,
      default: null,
    },
    darkgrey: {
      type: String,
      default: null,
    },
    cardgrey: {
      type: String,
      default: null,
    },
    opacblack: {
      type: String,
      default: null,
    },
    white: {
      type: String,
      default: null,
    },
    blue: {
      type: String,
      default: null,
    },
  },
  created() {
    this.setBreakPoint(window.innerWidth);
    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target;
      this.setBreakPoint(innerWidth);
    });
  },
  data() {
    return {
      breakpoint: window.innerWidth,
    };
  },
  methods: {
    setBreakPoint(innerWidth) {
      if (innerWidth <= 575) this.breakpoint = 'xs';
      // Mobile
      else if (innerWidth > 575 && innerWidth < 768) this.breakpoint = 'sm';
      // Tablets
      else if (innerWidth > 767 && innerWidth < 992) this.breakpoint = 'md';
      // Desktop
      else if (innerWidth > 991 && innerWidth < 1200) this.breakpoint = 'lg';
      // Large Desktop
      else if (innerWidth >= 1200) this.breakpoint = 'extra';
    },
  },
  computed: {
    typographyClass() {
      const component = this;
      switch (this.breakpoint) {
        case 'xs':
          return getXs(component);
        case 'sm':
          return getSm(component);
        case 'md':
          return getMd(component);
        case 'lg':
          return getLg(component);
        case 'extra':
          return getExtra(component);
        default:
          return getDefaultClass(component);
      }
    },
    typographyWeight() {
      const { bold, light } = this;
      if (bold) return 'bold';
      if (light) return 'light';
      return 'regular';
    },
    typographyColor() {
      const {
        grey, opacgrey, cardgrey, darkgrey, opacblack, white, blue,
      } = this;
      if (grey) return 'grey';
      if (darkgrey) return 'darkgrey';
      if (opacgrey) return 'opacgrey';
      if (cardgrey) return 'cardgrey';
      if (opacblack) return 'opacblack';
      if (blue) return 'blue';
      if (white) return 'white';
      return 'black';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
// @import '../assets/scss/font-weight.scss';

%base-typography {
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  // white-space: wrap;
}
.blue {
  color: $blue;
}
.light {
  font-weight: 300;
}
.regular {
  font-weight: 400;
}
.bold {
  font-weight: 500;
}
.xs {
  @extend %base-typography;
  font-size: 14px;
}
.sm {
  @extend %base-typography;
  font-size: 16px;
}
.md {
  @extend %base-typography;
  font-size: 18px;
}
.lg {
  @extend %base-typography;
  font-size: 25px;
}
.extra {
  @extend %base-typography;
  font-size: 30px;
}
.default-typography {
  @extend %base-typography;
  font-size: 1.0rem;
}
</style>
