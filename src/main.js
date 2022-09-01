import { createApp } from 'vue'
import App from './App.vue'

// importar o pacote mitt
import mitt from 'mitt'

// instancia da dependencia mitt
const emitter = mitt();

// iniciar a instancia do vue 
// createApp(App).mount('#app')
const app = createApp(App);

// configurar a instancia do pacote mitt como global
app.config.globalProperties.emitter = emitter;

app.mount('#app')
