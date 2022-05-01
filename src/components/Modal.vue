<script>
export default {
  props: {
    show: Boolean,
    width: Number,
    classType : String,
    flex : Boolean,
    login : Boolean
  },
   methods: {
    getClass(){
      if(this.classType != null)
      return this.classType.toString()

      return 'default'
    }
  },
  data()
  {
    return {
    loginClass: 'active',
   
    classObject: {
      'modal-container': true
    }, 
    currentClass:
    {
      "default" : {
      'modal-container': true},

      "Menu" : "Menu"
    },    
    styleObject: {
      width: '100%',
      fontSize: '13px'
    }
    
  }
  }
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div :class="currentClass[getClass()]">
          <div class="modal-header">
            <slot name="header"> <h2>Item entry</h2>
          <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">Select enviroment</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            <small class="text-muted">Click to close.</small>
              <button
                class="btn btn-secondary modal-default-button"
                @click="$emit('close')"
              >
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.Menu
{
  width : 80%;
  margin: 0px auto;
  padding: 0 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #0dcaf0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
