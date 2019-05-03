
<template>
  <div class="modal" tabindex="-1" role="dialog"
  aria-labelledby="addButton" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <slot name="modal-text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  color: #333;
  display: table;
  transition: opacity .3s ease;
  .modal-content {
    left: 0;
    height: 100vh;
    width: 50%;
    margin: 0;
    background-color: $white;
    transition: all .3s ease;
    -webkit-animation: anim 0.5s 1;
    animation: anim 0.5s 1;
    @-webkit-keyframes anim {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    @keyframes anim {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    .modal-body {
      display: flex;
      flex: 1;
    }
  }
}
</style>
