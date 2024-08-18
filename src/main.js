import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BekIcon from './components/BekIcon.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BekIcon', BekIcon)

app.mount('#app')
