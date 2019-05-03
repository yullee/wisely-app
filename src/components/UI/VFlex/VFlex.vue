<template>
  <div :class="['flex', justifyClass, directionClass, alignClass, xsClass, smClass, mdClass, lgClass]">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  created() {
    this.breakpoint = window.innerWidth;
    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target;
      this.breakpoint = innerWidth;
    });
  },
  data() {
    return {
      breakpoint: window.innerWidth,
    };
  },
  computed: {
    justifyClass() {
      const {
        justifyContentStart,
        justifyContentEnd,
        justifyContentCenter,
        justifyContentSpaceAround,
        justifyContentSpaceBetween,
        justifyContentBaseline,
        justifyItemsStart,
        justifyItemsEnd,
        justifyItemsCenter,
        justifyItemsSpaceAround,
        justifyItemsSpaceBetween,
        justifyItemsBaseline,
      } = this.convertToCamel(this.$attrs);
      // kebab case

      if (justifyContentStart) return 'justify-content-start';
      if (justifyContentEnd) return 'justify-content-end';
      if (justifyContentCenter) return 'justify-content-center';
      if (justifyContentSpaceAround) return 'justify-content-space-around';
      if (justifyContentSpaceBetween) return 'justify-content-space-between';
      if (justifyContentBaseline) return 'justify-content-baseline';
      if (justifyItemsStart) return 'justify-content-start';
      if (justifyItemsEnd) return 'justify-content-end';
      if (justifyItemsCenter) return 'justify-content-center';
      if (justifyItemsSpaceAround) return 'justify-content-space-around';
      if (justifyItemsSpaceBetween) return 'justify-content-space-between';
      if (justifyItemsBaseline) return 'justify-content-baseline';
      return '';
    },
    directionClass() {
      const {
        column,
      } = this.convertToCamel(this.$attrs);

      if (column) return 'flex-direction-column';
      return 'flex-direction-row';
    },
    alignClass() {
      const {
        alignItemsStart,
        alignItemsEnd,
        alignItemsCenter,
        alignItemsBaseline,
        alignContentStart,
        alignContentEnd,
        alignContentCenter,
        alignContentBaseline,
      } = this.convertToCamel(this.$attrs);

      if (alignItemsStart) return 'align-items-start';
      if (alignItemsEnd) return 'align-items-end';
      if (alignItemsCenter) return 'align-items-center';
      if (alignItemsBaseline) return 'align-items-baseline';
      if (alignContentStart) return 'align-content-start';
      if (alignContentEnd) return 'align-content-end';
      if (alignContentCenter) return 'align-content-center';
      if (alignContentBaseline) return 'align-content-baseline';
      return '';
    },
    xsClass() {
      const {
        xs1,
        xs2,
        xs3,
        xs4,
        xs5,
        xs6,
        xs7,
        xs8,
        xs9,
        xs10,
        xs11,
        xs12,
      } = this.convertToCamel(this.$attrs);

      if (xs1) return 'xs1';
      if (xs2) return 'xs2';
      if (xs3) return 'xs3';
      if (xs4) return 'xs4';
      if (xs5) return 'xs5';
      if (xs6) return 'xs6';
      if (xs7) return 'xs7';
      if (xs8) return 'xs8';
      if (xs9) return 'xs9';
      if (xs10) return 'xs10';
      if (xs11) return 'xs11';
      if (xs12) return 'xs12';
      return '';
    },
    smClass() {
      if (this.breakpoint <= 768) {
        const {
          sm1,
          sm2,
          sm3,
          sm4,
          sm5,
          sm6,
          sm7,
          sm8,
          sm9,
          sm10,
          sm11,
          sm12,
        } = this.convertToCamel(this.$attrs);

        if (sm1) return 'sm1';
        if (sm2) return 'sm2';
        if (sm3) return 'sm3';
        if (sm4) return 'sm4';
        if (sm5) return 'sm5';
        if (sm6) return 'sm6';
        if (sm7) return 'sm7';
        if (sm8) return 'sm8';
        if (sm9) return 'sm9';
        if (sm10) return 'sm10';
        if (sm11) return 'sm11';
        if (sm12) return 'sm12';
      }
      return '';
    },
    mdClass() {
      if (this.breakpoint <= 992 && this.breakpoint >= 768) {
        const {
          md1,
          md2,
          md3,
          md4,
          md5,
          md6,
          md7,
          md8,
          md9,
          md10,
          md11,
          md12,
        } = this.convertToCamel(this.$attrs);

        if (md1) return 'md1';
        if (md2) return 'md2';
        if (md3) return 'md3';
        if (md4) return 'md4';
        if (md5) return 'md5';
        if (md6) return 'md6';
        if (md7) return 'md7';
        if (md8) return 'md8';
        if (md9) return 'md9';
        if (md10) return 'md10';
        if (md11) return 'md11';
        if (md12) return 'md12';
      }
      return '';
    },
    lgClass() {
      const {
        lg1,
        lg2,
        lg3,
        lg4,
        lg5,
        lg6,
        lg7,
        lg8,
        lg9,
        lg10,
        lg11,
        lg12,
      } = this.convertToCamel(this.$attrs);

      if (lg1) return 'lg1';
      if (lg2) return 'lg2';
      if (lg3) return 'lg3';
      if (lg4) return 'lg4';
      if (lg5) return 'lg5';
      if (lg6) return 'lg6';
      if (lg7) return 'lg7';
      if (lg8) return 'lg8';
      if (lg9) return 'lg9';
      if (lg10) return 'lg10';
      if (lg11) return 'lg11';
      if (lg12) return 'lg12';
      return '';
    },
  },
  methods: {
    convertToCamel(obj) {
      const convertedObj = {};
      for (const key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
          convertedObj[key.replace(/-([a-z])/g, g => g[1].toUpperCase())] = true;
        }
      }
      return convertedObj;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.justify-content-start {
  justify-content: flex-start;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-space-around {
  justify-content: space-around;
}

.justify-content-space-between {
  justify-content: space-between;
}

.justify-content-base-line {
  justify-content: baseline;
}
.justify-items-start {
  justify-items: flex-start;
}

.justify-items-end {
  justify-items: flex-end;
}

.justify-items-center {
  justify-items: center;
}

.justify-items-space-around {
  justify-items: space-around;
}

.justify-items-space-between {
  justify-items: space-between;
}

.justify-items-base-line {
  justify-items: baseline;
}
.flex-direction-column {
  flex-direction: column;
}
.flex-direction-row {
  flex-direction: row;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-end {
  align-items: flex-end;
}

.align-items-center {
  align-items: center;
}

.align-items-baseline {
  align-items: baseline;
}

.align-content-start {
  align-content: flex-start;
}

.align-content-end {
  align-content: flex-end;
}

.align-content-center {
  align-content: center;
}

.align-content-baseline {
  align-content: baseline;
}

@for $i from 1 through 12 {
    .xs#{$i} {
      // flex: $i $i auto;
      flex-basis: $i * 8.3333%;
    }
    .sm#{$i} {
      flex-basis: $i * 8.3333%;
    }
    .md#{$i} {
      flex-basis: $i * 8.3333%;
    }
    .lg#{$i} {
      flex-basis: $i * 8.3333%;
    }
    .extra#{$i} {
      flex-basis: $i * 8.3333%;
    }
}

</style>
