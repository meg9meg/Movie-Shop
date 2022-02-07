import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import VueCreditCardValidation from 'vue-credit-card-validation';
import App from './App.vue'
import router from './router'
import store from './store'

library.add(fas)
library.add(fab)

createApp(App).use(store).use(router).use(VueCreditCardValidation).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
