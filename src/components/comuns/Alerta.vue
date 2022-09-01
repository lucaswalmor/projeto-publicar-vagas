<template>
    <div :class="estiloAlerta" role="alert">
          <slot name="titulo">
            <h3>Titulo da mensagem de feedback</h3>
          </slot>
          <hr>
          <slot name="descricao">
            <p>Mensagem de feedback</p>
          </slot>
          <slot></slot>
      </div>
</template>

<script>
export default {
    name: 'Alerta',
    props: {tipo: String},
    computed: {
        estiloAlerta () {
            switch(this.tipo) {
                case 'erro': return 'alert alert-danger  text-center container alert-dismissible'
                case 'sucesso': return 'alert alert-success text-center container alert-dismissible'
                default: return 'alert alert-success text-center container alert-dismissible'
            }
        }
    }
}
</script>

<style>

</style>