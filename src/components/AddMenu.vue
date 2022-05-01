<script>
import { faker } from '@faker-js/faker';

export default {
  name: 'AddMenu',
  data() {
    return {
      loaded: false,
      iName: '',
      iDesc: '',
      createdItem: { name: '', desc: '' },
    };
  },
  emits: ['response'],
  methods: {
    onSubmit() {
      this.createdItem.name = this.iName;
      this.createdItem.desc = this.iDesc;
      this.iName = '';
      this.iDesc = '';
      this.$emit('response', this.createdItem);
    },
    dorandom() {
      this.createdItem.email = faker.internet.email();
      this.createdItem.name = this.iName = faker.name.firstName();
      this.createdItem.desc = this.iDesc = faker.name.jobTitle();
      this.onSubmit()
    },
      fillNoSubmit() {
      this.createdItem.email = faker.internet.email();
      this.createdItem.name = this.iName = faker.name.firstName();
      this.createdItem.desc = this.iDesc = faker.name.jobTitle();
    },
  },
};
</script>
<template>
  <div class="products">
    <div class="card">
      <!-- <div class="card-header text-white bg-secondary mb-2">Add Item</div> -->

      <div class="card-body mt-2">
        <form class="row g-3" autocomplete="off" v-on:submit.prevent="onSubmit">
          <div class="col-sm mb-3">
        <label for="Name" class="form-label">Name</label>
        
            <input
              v-model="iName"
              type="text"
              class="form-control"
              id="Name"
              placeholder="Item"
              required
              autocomplete="off"
            />
            <label for="sr" class="form-label">Email</label>
             <input
              v-model="createdItem.email"
              type="text"
              class="form-control"
              id="sr"
              placeholder="email"
              required
              autocomplete="off"
            />
            <label for="Description" class="form-label">Description</label>
             <input
              v-model="iDesc"
              class="form-control"
              id="Description"
              placeholder="Description"
              required
              autocomplete="off"
            />
          
         </div>
           
          <div class="d-grid gap-2 d-md-block mb-3">
            <button type="submit" class="w-100 mb-2 btn btn-lg rounded-4 btn-primary">Submit</button>
          </div>
        </form>
        
        <div class="d-flex justify-content-start gap-3">
          <button @click="dorandom()" class="btn btn-secondary  mb-3">
            Fill and submit
          </button>
                  <div class="d-grid gap-2 d-md-block">
          <button @click="fillNoSubmit()" class="btn btn-secondary  mb-3">
            Fill no submit
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}
</style>
