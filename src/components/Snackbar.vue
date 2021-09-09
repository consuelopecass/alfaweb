<template>
      <div class="text-center">
        <button @click="show=true">prende</button>
        <v-snackbar v-model="showSnackbar" :multi-line="multiLine">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="show = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
</template>

<script>
//import {name} from '{route}'

export default {
  name: "snackbar",
  props: {
      snackbar:{
          type: Boolean,
          default: false
      }
  },
  data: function () {
    return {
      multiLine: true,
      show:false,
      text: `I'm a multi-line snackbar.`,
    };
  },
  computed: {
    showSnackbar:{
      get:function(){
        if(this.snackbar==true){
          // this.snackbar =true
          return true
        }
      },
      set:function(newValue){
        this.snackbar =false;
      }
    }
  },
  // methods: {},
  // watch: {},
  // components: {},

  // -- Lifecycle Methods
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>