<template>
  <v-flex
    :class="[inputSize]"
    class="input-box"
    align-items-center
  >
    <v-icon
      @click.native="decreaseQuantity()"
      :class="minimum()"
      name="minus"
    />
    <input class="quantity-input"
      type="text"
      :disabled="true"
      :value="quantity"
    >
    <v-icon class="enabled"
      @click.native="increaseQuantity()"
      name="plus"
    />
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      // value: this.newQuantity,
    };
  },
  // watch: {
  //   newQuantity: 'setDefault',
  // },
  computed: {
    ...mapState({
      quantity(state) {
        return state.quantity;
      },
      newQuantity(state) {
        return state.newQuantity;
      },
    }),
    inputSize() {
      const { xs, sm } = this;
      if (xs) return 'xs';
      if (sm) return 'sm';
      return 'md';
    },
  },
  methods: {
    ...mapActions({
      setQuantity: 'setQuantity',
    }),
    increaseQuantity() {
      // let value = this.newQuantity + 1
      this.setQuantity(this.quantity + 1);
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.setQuantity(this.quantity - 1);
    },
    minimum() {
      if (this.quantity === 1) {
        return 'disabled';
      }
      return 'enabled';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';


.input-box {
  border: 1px solid $grey;
  padding: 0px 10px;
  .disabled {
    color: $grey;
  }
  .enabled {
    cursor: pointer;
  }
  .enabled:hover {
    color: $blue;
  }
  .quantity-input {
    font-size: 20px;
    height: 50px;
    text-align: center;
    outline: none;
    border: none;
  }
}
</style>
