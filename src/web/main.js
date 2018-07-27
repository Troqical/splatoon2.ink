import Vue from 'vue';
import store from './store';
import router from './router';

import './i18n';
import './directives.js';
import './filters.js';

// Start the Vue app with our root component
import App from './components/App.vue';
new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');

// Start analytics
require('./analytics');
