<template>
    <div class="h-100 p-5 bg-light border rounded-3">
        <h2>Pesquisar vagas</h2>
        <div class="row">
        <div class="col">
            <div class="form-group">
            <label for="">Titulo da vaga</label>
            <input
                v-model="titulo"
                type="text"
                class="form-control"
                placeholder="Pesquise por palavras chaves por exemplo 'PHP' 'CSS' 'JAVASCRIPT'"
            />
            <small class="form-text text-muted">
                Informe palavras que estejam relacionadas com o titulo da vaga que
                você procura
            </small>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-dark mt-2" @click="pesquisarVaga">Buscar</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PesquisarVaga',
    data() {
        return {
            titulo: ''
        }
    },
    methods: {
        pesquisarVaga() {
            this.emitter.emit('filtrarVagas', {titulo: this.titulo})
        }
    }
};
</script>

<style>
</style>