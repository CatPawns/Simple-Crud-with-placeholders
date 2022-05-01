<script>
import { Toast } from 'bootstrap';

export default {
  name: 'BootstrapToast',
  props: {
    message: {
      type: String,
      default: '',
    },
    mshow: Number,
  },
  data() {
    return {
      toast: null,
    };
  },
  methods: {
    show() {
      this.toast.show();
    },
  },
  mounted() {
    this.toast = Toast.getOrCreateInstance(this.$refs.el);
    console.log(this.$refs.el);
    console.log(this.$refs);
    console.log(this.$refs.showForm);

    //this.toast.show();
  },
  watch: {
    mshow() {
      this.show();
    },
  },
};
</script>
<template>
<Teleport to="body">
  <button
    type="button"
    class="btn btn-primary"
    id="liveToastBtn"
    @click="show()"
  >
    Dispatch Toast
  </button>
  <div class="position-fixed  p-3 top-0 end-0" style="z-index: 6000">
    <div
      ref="el"
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Info</strong>
        <small>1 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </div>
  </Teleport>
</template>
