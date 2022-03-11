<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo.png" alt="logo rick y morty"
        /></a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-bars"></i></span>
    </button>
        <div
          class="collapse navbar-collapse justify-content-lg-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <!-- <li class="nav-item">
          <router-link class="nav-link" to="/personaje">Personaje</router-link>
        </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.navbar {
  margin-top: 30px;
  backdrop-filter: blur(7px);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.4);
}

.navbar-brand img {
  width: 200px;
}
.navbar li a.router-link-exact-active {
  padding: 1rem 1.2rem;
  color: #fff;
  font-weight: bold;
}
.navbar li a {
  padding: 1rem 1.2rem;
  color: #fff;
}


.navbar-toggler-icon{
  color: #fff;
}
</style>