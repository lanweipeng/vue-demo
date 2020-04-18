<template>
<div>
  <son ref='son1'></son>
  <son ref='son2'></son>
</div>
</template>
<script>
import Son from './Son.vue'
export default {
data(){
return {
}
},created(){
},
mounted(){
this.$refs['son1'].name='son1'
  this.$refs['son2'].name='son2'
},
methods:{},components:{
  Son
}
}
</script>
<style lang='less' scoped>
</style>