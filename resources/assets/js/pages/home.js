import './../bootstrap'
import home from './../components/home.vue'
import navbar from './../components/partials/navbar.vue'
import notificationPopup from './../components/partials/notificationPopup.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  components: {
    home, navbar, notificationPopup
  }
})
