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
  .modal-dialog {
    display: table-cell;
    vertical-align: middle;
    .modal-content {
      border-radius: 10px;
      width: auto;
      margin: 50px;
      padding: 10px 30px 20px 30px;
      background-color: $white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      .modal-header {
        margin-top: 20px;
        padding-bottom: 20px;
      }
      .modal-body {
        margin: 20px 0;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
