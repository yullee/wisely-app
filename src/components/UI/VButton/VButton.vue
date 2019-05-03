<template>
  <div>
    <button
      :class="[buttonClass]"
      :style="{ width }"
      @click="click"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
const getDefaultClass = () => 'default-button';
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
      default: null,
    },
    click: {
      type: Function,
      default: () => {},
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
  computed: {
    buttonClass() {
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
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

%base-button {
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5);
  background: $blue;
  color: #fff;
  padding: 0px 10px;
  width: 100%;
  white-space: nowrap;
  margin: 3px;
  cursor: pointer;
  border: none;
  outline: none;
  letter-spacing: 1.5px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.xs-button {
  @extend %base-button;
  height: 30px;
  font-size: 0.65rem;
}
.sm-button {
  @extend %base-button;
  height: 33px;
  font-size: 0.7rem;
}
.md-button {
  @extend %base-button;
  height: 36px;
  font-size: 0.75rem;
}
.lg-button {
  @extend %base-button;
  height: 46px;
  font-size: 0.8rem;
}
.extra-button {
  @extend %base-button;
  height: 50px;
  font-size: 0.9rem;
}
.default-button {
  @extend %base-button;
  height: 30px;
  font-size: 0.65rem;
}
.xs-button:hover, .sm-button:hover, .md-button:hover,
.lg-button:hover, .extra-button:hover .default-button:hover {
  background-color: $darkgrey;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
</style>
