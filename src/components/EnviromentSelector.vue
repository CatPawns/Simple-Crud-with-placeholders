
<script>
//import {Server_API_URL , Loca_API_URL} from './Constants.js';
import {Server_API_URL , Loca_API_URL} from './Constants.js';

export default {
  name: 'EnviSelector',
  props: {
    close : Boolean,
    mshow: Number,
  },
  data()
 {
   
   return{
     Enviroment : [ {"Api" : Server_API_URL , displayName : "Web"} , {"Api" :Loca_API_URL , displayName : "Local"}],
     selectedEnviroment : ''};
 },
  emits: ['changeServer'],
  watch: {
    selectedEnviroment() {
      console.log("Request to change server")
      this.$emit("changeServer",this.selectedEnviroment);
    },
  },
};
</script>

<template>
<div> 
  <template v-for="branch in Enviroment" :key="branch.Api">
<ul>
    <input class="form-check-input" type="radio"
      :id="branch.Api"
      :value="branch.Api"
      v-model="selectedEnviroment">
    <label :for="branch">{{ branch.displayName }}</label>
  </ul>
  </template>
</div> 

</template>

</template>