<template>
    

                <div class="container">
                    <form @submit.prevent="mostrarCharactersForName()" class="d-flex justify-content-center">
                    <input class="form-control me-2" id="name" name="character" type="search" placeholder="Search" aria-label="Search" required v-model="character">
                    <button class="btn btn-card-secondary" @click="mostrarCharactersForName">Search</button>
                </form>
  
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
    
  </div>
</template>

<script>
export default {
    data() {
    return {
      characters: {},
      character: "",
      
    };
  },
 methods: {
   async mostrarCharactersForName(){
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.character}`);
        const getCharacters = await data.json();
        this.characters = getCharacters.results;
       
      } catch (error) {
        throw error;
      }
    },
    
    
}
}
</script>

<style>

</style>