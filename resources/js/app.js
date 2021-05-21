require('./bootstrap');

window.Vue = require('vue');

// import App from './components/App.vue';

// const app = new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   render: h => h(App)
// });


const files = require.context("./", true, /\.vue$/i);
files.keys().map(key =>
    Vue.component(
        key
            .split("/")
            .pop()
            .split(".")[0],
        files(key).default
    )
);

const app = new Vue({
    el: "#app"
});