<template>
  <div class="container">
    <div class="botones">
      <button
        v-if="counter > 1"
        class="btn btn-primary anterior"
        v-on:click="paginaAnterior"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        v-if="counter < 42"
        class="btn btn-primary siguiente"
        v-on:click="paginaSiguiente"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    <div class="row">
      <div
        class="col-lg-3 d-flex justify-content-center"
        v-for="character of characters"
        :key="character.id"
      >
        <div class="card">
          <div class="card-body text-center">
            <div class="card-img py-2">
              <img :src="character.image" alt="" class="imgCharacter" />
            </div>
            <div class="name h5">{{ character.name }}</div>
            <div v-if="character.status === 'Alive'" class="statusAlive">
              {{ character.status }}
            </div>
            <div v-if="character.status === 'Dead'" class="statusDead">
              {{ character.status }}
            </div>
            <div v-if="character.status === 'unknown'" class="statusUnknown">
              {{ character.status }}
            </div>
            <div class="description">Specie: {{ character.species }}</div>
            <div class="description">Gender: {{ character.gender }}</div>
            <div class="btn btn-primary my-2 mt-3">
              <router-link :to="`/personaje/${character.id}`"
                >Ir al Personaje</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="botones">
      <button
        v-if="counter > 1"
        class="btn btn-primary anterior"
        v-on:click="paginaAnterior"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        v-if="counter < 42"
        class="btn btn-primary siguiente"
        v-on:click="paginaSiguiente"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: {},
      counter: 1,
      character: "",
    };
  },
  methods: {
   
    async mostrarCharacters() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character`);
        const getCharacters = await data.json();
        this.characters = getCharacters.results;
      } catch (error) {
        throw error;
      }
    },

    async paginaSiguiente(event) {
      this.counter;
      if (event) {
        if (this.counter <= 41) {
          this.counter++;
          const url = `https://rickandmortyapi.com/api/character?page=${this.counter}`;
          console.log(this.counter);
          console.log(url);

          try {
            const data = await fetch(url);
            const getCharacters = await data.json();
            this.characters = getCharacters.results;
            console.log(this.characters);
          } catch (error) {
            throw error;
          }
        } else {
          this.counter = 42;
        }
      }
    },

    async paginaAnterior(event) {
      this.counter;
      if (event) {
        //this.counter--;
        if (this.counter >= 2) {
          this.counter--;
          const url = `https://rickandmortyapi.com/api/character?page=${this.counter}`;
          console.log(this.counter);
          console.log(url);

          try {
            const data = await fetch(url);
            const getCharacters = await data.json();
            this.characters = getCharacters.results;
            console.log(this.characters);
          } catch (error) {
            throw error;
          }
        } else {
          this.counter = 1;
        }
      }
    },
  },
  created() {
    this.mostrarCharacters();
  },
};
</script>

<style >
body {
  background: url("../assets/background.jpg");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: top left;
  overflow-x: hidden;
  background-attachment: fixed;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background-color: #05ff9b;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background-color: #17001aea;
}
.container {
  margin-top: 70px;
  position: relative;
  z-index: 100;
}

.container .row .card {
  min-width: 250px;
  max-width: 270px;
  height: 320px;
  margin: 30px;
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

.container .row .card .card-body .statusAlive {
  font-size: 1.3rem;
  font-weight: 700;
  color: #25c717;
}
.container .row .card .card-body .statusDead {
  font-size: 1.3rem;
  font-weight: 700;
  color: #b81b1b;
}
.container .row .card .card-body .statusUnknown {
  font-size: 1.3rem;
  font-weight: 700;
  color: #abad12;
}

a,
button {
  color: #fff !important;
  text-decoration: none !important;
}
.container .row .card .card-body .btn.btn-primary,
button {
  background: linear-gradient(145deg, #0685ac, #36aa7c 50%, #0685ac);
  border: none;
  font-size: 600;
}

.container .row .card .card-body .btn.btn-primary:hover,
button:hover {
  background: linear-gradient(110deg, #0685ac, #05ff9b 50%, #0685ac);
}

.botones {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.anterior,
.siguiente {
  width: 100px;
  border-radius: 50px !important;
}
</style>