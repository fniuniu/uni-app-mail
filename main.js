import Vue from 'vue'
import App from './App'
import status from './components/status.vue'

Vue.config.productionTip = false
//全局注册组件
Vue.component('page-status', status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
