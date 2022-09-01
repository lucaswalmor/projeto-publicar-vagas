<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente Sua vaga para os profissionais da área</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Titulo da vaga</label>
        <input type="text" class="form-control" v-model="titulo">
        <div class="form-text">Por exemplo: Programador Javascript e vueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Descrição</label>
          <textarea id="my-textarea" class="form-control" name="" rows="3" v-model="descricao"></textarea>
        <div class="form-text">Informe os detalhes da vaga</div>
      </div>
    </div>
    
    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">Sálario</label>
        <input type="number" class="form-control" v-model="salario">
        <div class="form-text">Informe o sálario</div>
      </div>
      <div class="col">
        <label for="" class="form-label">Modalidade</label>
        <select name="" id="" class="form-select" v-model="modalidade">
          <option value="" disabled>--Selecione</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas.</div>
      </div>
      <div class="col">
        <label for="" class="form-label">Tipo de vaga</label>
        <select name="" id="" class="form-select" v-model="tipo">
          <option value="" disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação</div>
      </div>
    </div>
    
    <div class="row mt-3 col">
      <button class="btn btn-primary" @click="salvarVaga" type="submit">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PublicarVaga',
    data() {
      return {
        titulo: '',
        descricao: '',
        salario: '',
        modalidade: '',
        tipo: ''
      }
    },
    methods: {
      salvarVaga() {

        let tempoDecorrido = Date.now();
        let dataAtual = new Date(tempoDecorrido);

        let vaga = {
          titulo: this.titulo,
          descricao: this.descricao,
          salario: this.salario,
          modalidade: this.modalidade,
          tipo: this.tipo,
          publicacao: dataAtual.toISOString()
        }

        let vagas = JSON.parse(localStorage.getItem('vagas'))

        if(!vagas) {
          vagas = [];
        }

        vagas.push(vaga);        
        
        if(this.validaFormulario()) {
          localStorage.setItem('vagas', JSON.stringify(vagas));
          this.emitter.emit('alerta', {
            titulo: `A vaga ${this.titulo} foi cadastrada com sucesso!`,
            descricao: `Parabéns a vaga foi cadastrada e poderá ser consultada!`,
            tipo: 'sucesso'
          });
          this.resetaForm();
        } else {
          this.emitter.emit('alerta', {
            titulo: `-_-.... Não foi possível realizar o cadastro`,
            descricao: `Preencha todos os campos!`,
            tipo: 'erro'
          });
        }
      },
      resetaForm() {
        this.titulo = '',
        this.descricao = '',
        this.salario = '',
        this.modalidade = '',
        this.tipo = ''
      },
      validaFormulario() {
        let valido = true;

        if(this.titulo === '') valido = false
        if(this.descricao === '') valido = false
        if(this.salario === '') valido = false
        if(this.modalidade === '') valido = false
        if(this.tipo === '') valido = false

        return valido;
      }
    }
}
</script>

<style>

</style>