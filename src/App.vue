<template>
  <div>
    <topo-padrao @navegar="componente = $event"></topo-padrao>
    <FavoritarVagas />
    <!-- <Alerta v-if="exibirAlerta">  -->
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{alerta.titulo}}</h5>
      </template>
      <template v-slot:descricao>
        <div>
          <p>{{alerta.descricao}}</p>
        </div>
      </template> 
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </alerta>
    <Conteudo v-if="visibilidade" :conteudo="componente"/>
  </div>
</template> 

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import FavoritarVagas from './components/comuns/FavoritarVagas.vue';
import Alerta from './components/comuns/Alerta.vue';

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao,
    FavoritarVagas,
    Alerta
  },
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false,
    alerta: {titulo: '', descricao: '', tipo: ''}
  }),
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true;        
      setTimeout(() => {
        this.exibirAlerta = false;        
      }, 2000);
    });
  },
  computed: {

  }
}
</script>

<style scoped>
h1 {
  color: greenyellow
}
</style>
