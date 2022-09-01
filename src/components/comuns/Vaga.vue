<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{titulo}}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input type="checkbox" id="check" class="form-check-input" v-model="favoritada">
                            <label for="check" class="form-check-label">Favoritar</label>
                            <!-- <button class="btn btn-danger" @click="disparar()">Teste</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">{{descricao}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">
                Sálario: {{salario}} | Modalidade: {{ getModalidade }} 
                | Tipo: {{getTipo}} | Publição: {{ getPublicacao }}
            </small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Vaga',
    // props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
    props: {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            default: 'Vaga sem descrição'
        },
        salario: {
            type: [Number, String],
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        publicacao: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            favoritada: false
        }
    },
    watch: {
        favoritada(novo) {
            if(novo) {
                this.emitter.emit('favoritarVaga', this.titulo)
            } else {
                this.emitter.emit('desfavoritarVaga', this.titulo)
            }
        }
    },
    computed: {
        getModalidade() {
            switch(this.modalidade) {
                case '1': return 'Home Office'
                case '2': return 'Presencial' 
            }
        },
        
        getTipo() {
            switch(this.tipo) {
                case '1': return 'CLT'
                case '2': return 'PJ' 
            }
        }, 

        getPublicacao() {
            let dataPublicacao = new Date(this.publicacao);
            // return dataPublicacao.toLocaleString('pt-BR');
            return dataPublicacao.toLocaleDateString('pt-BR');
        }
    },
    methods: {
        // disparar() {
        //     this.emitter.emit('eventoGlobal', 'Teste')
        // }
    }
}
</script>

<style>

</style>