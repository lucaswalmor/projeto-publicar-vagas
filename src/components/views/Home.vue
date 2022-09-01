<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga />
      </div>
    </div>

    <listar-vagas>
    </listar-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador :titulo="'Vagas Abertas'" :indicador="'100'" :bg="'bg-dark'" :color="'text-white'"/>
      </div>
      <div class="col-4">
        <Indicador :titulo="'Profissionais cadastrados'" :indicador="'225'" :bg="'bg-dark'" :color="'text-white'"/>
      </div> 
      <div class="col-4">
        <Indicador :titulo="'Visitantes Online'" :indicador="usuariosOnline" :bg="'bg-light'" :color="'text-dark'" />
      </div>
    </div>    
  </div> 
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue';
import Indicador from '@/components/comuns/Indicador.vue';
import ListarVagas from '@/components/comuns/ListarVagas.vue';

export default {
  name: "Home",
  components: { PesquisarVaga, Indicador, ListarVagas },
  data() {
    return {
      usuariosOnline: 0,
    }
  },
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000)
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>