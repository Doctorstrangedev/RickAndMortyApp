<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-center">
        <div class="card">
          <div class="card-body text-center">
            <div class="card-img py-2">
              <img :src="character.image" alt="" class="imgCharacter" />
            </div>
            <div class="name h5">{{ character.name }}</div>
            <div v-if="character.status==='Alive'" class="statusAlive">{{ character.status }}</div>
            <div v-if="character.status==='Dead'" class="statusDead">{{ character.status }}</div>
            <div v-if="character.status==='unknown'" class="statusUnknown">{{ character.status }}</div>
            <div class="description">Specie: {{ character.species }}</div>
            <div class="description">Gender: {{ character.gender }}</div>
            <div class="description">Origin: {{ character.origin?.name }}</div>
            <div class="description">Location: {{ character.location?.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {},
    };
  },
  methods: {
    async mostrarCharacter() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
        const getCharacter = await data.json();
        this.character = getCharacter;
      } catch (error) {
        throw error;
      }
    },
  },
  created() {
    this.mostrarCharacter();
  },
};
</script>

<style  scoped>

.container {
  margin-top: 70px;
  position: relative;
  z-index: 100;
}

.container .row .card {
  min-width: 350px;
  height: 350px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
}

.container .row .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.6);
}

.container .row .card .card-body {
  padding: 1rem 1.2rem;
  color: #fff;
}

.container .row .card .card-body .card-img img {
  width: 90px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
}

.container .row .card .card-body .name.h5 {
  margin: 0;
}

.container .row .card .card-body .status {
  font-size: 1.3rem;
  font-weight: 700;
  color: #6ef5bf;
}

a {
  color: #fff !important;
  text-decoration: none !important;
}
.container .row .card .card-body .btn.btn-primary {
  background: linear-gradient(145deg, #0685ac, #36aa7c 50%, #0685ac);
  border: none;
  font-size: 600;
}

.container .row .card .card-body .btn.btn-primary:hover {
  background: linear-gradient(110deg, #0685ac, #05ff9b 50%, #0685ac);
}

</style>