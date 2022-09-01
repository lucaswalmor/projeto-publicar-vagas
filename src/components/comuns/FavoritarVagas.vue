<template>
  <div>
    <div class="row text-end p-2">
      <div class="col">
          <button
          class="btn btn-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Vagas Favoritas
        </button>
      </div>

    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Vagas Favoritadas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
            <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">
                {{vaga}}
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritarVagas",
  data() {
    return{
        vagas: []
    }
  },
  mounted() {
    // this.emitter.on('eventoGlobal', (p) => {
    //     console.log('Componente vagas favoritas', p)
    // })
    this.emitter.on('favoritarVaga', (titulo) => {
        this.vagas.push(titulo)
    });
    
    this.emitter.on('desfavoritarVaga', (titulo) => {
        let indiceArray = this.vagas.indexOf(titulo)
        if(indiceArray !== -1) {
            this.vagas.splice(indiceArray, 1); //remover 1 elemento a partir de 1 indice do array
        }
    });
  }
};
</script>

<style scoped>
.vagas-favoritas { 
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 5px;
}
</style>