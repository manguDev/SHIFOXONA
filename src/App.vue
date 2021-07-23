<template>
  <div id="app">
    <Nav/>
    <Top/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from './components/app/nav.vue'
import Top from './components/app/top.vue'
export default {
components:{
  Nav,Top
},
created(){
  this.$store.dispatch('addDoctors')
  this.$store.dispatch('DoctorFaol')
  this.$store.dispatch('addSore')
  this.$store.dispatch('history')
}

}
Top
</script>
<style>
@import url(assets/style.css);
</style>
