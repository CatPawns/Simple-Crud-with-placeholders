<script>
import { faker } from '@faker-js/faker';

export default {
  name: 'AddMenu',
  data() {
    return {
      loaded: false,
      iName: '',
      iDesc: '',
      FormData:{name:'', body:'', email:''},
      createdItem: { name: '', body: '',  email :''},
    };
  },
  emits: ['response'],
  methods: {
    onSubmit() {
     
      this.createdItem = this.FormData;
      this.$emit('response', this.createdItem);
      this.FormData.name = '';
      this.FormData.body = '';
      this.FormData.email ='';
    },
    dorandom() {
      this.fillNoSubmit();
      this.onSubmit()
    },
      fillNoSubmit() {
      this.FormData.email = faker.internet.email();
      this.FormData.name = faker.name.firstName();
      this.FormData.body =  faker.name.jobTitle();
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
              v-model="FormData.name"
              type="text"
              class="form-control"
              id="Name"
              placeholder="Item"
              required
              autocomplete="off"
            />
            <label for="sr" class="form-label">Email</label>
             <input
              v-model="FormData.email"
              type="text"
              class="form-control"
              id="sr"
              placeholder="email"
              required
              autocomplete="off"
            />
            <label for="Description" class="form-label">Description</label>
             <input
              v-model="FormData.body"
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
