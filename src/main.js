import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import './assets/all.scss'

import App from './App.vue'
import router from './router'

Object.keys(AllRules).forEach(rule => {
  if (rule !== 'default') {
    defineRule(rule, AllRules[rule])
  }
})

setLocale('zh_TW')

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('v-form', Form)
app.component('v-field', Field)
app.component('error-message', ErrorMessage)

app.mount('#app')
