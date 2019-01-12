import Vue from 'vue'
{{#isEnabled plugins 'axios'}}
import axios from 'axios'
{{/isEnabled}}
import { remote } from 'electron'

import App from './App'
import router from './router'
{{#isEnabled plugins 'vuex'}}
import store from './store'
{{/isEnabled}}

let showDevTools=false;

{{#isEnabled plugins 'vue-electron'}}
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
{{/isEnabled}}
{{#isEnabled plugins 'axios'}}
Vue.http = Vue.prototype.$http = axios
{{/isEnabled}}
Vue.config.productionTip = false

let springServerInstance=remote.getGlobal('springServer')

Vue.prototype.$spring = axios.create({
  baseURL: springServerInstance.url,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Access-Control-Allow-Origin': '*'
  }
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  {{#isEnabled plugins 'vuex'}}
  store,
  {{/isEnabled}}
  template: '<App/>'
}).$mount('#app')

// Open dev tools initially when in development mode
if (showDevTools && process.env.NODE_ENV === 'development')  {
  const currentWindow = remote.getCurrentWindow()
  currentWindow.openDevTools()
}