<template>
  <Navbar />
  

  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar{
  width: 7px;
}
::-webkit-scrollbar-thumb{
background-color: #05ff9b ;
border-radius: 5px;
}
::-webkit-scrollbar-track {
  background-color: #17001aea;
}


</style>
