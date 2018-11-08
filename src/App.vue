<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello-world></hello-world>
    <rx-demo></rx-demo>
  </div>
</template>

<script>
import HelloWorld from './components/hello-world/hello-world';
import RxDemo from './components/rx-demo/rx-demo';

export default {
  name: 'App',
  provide() {
    return {
      GLOBAL: {
        logined: true,
      },
    };
  },
  components: {
    HelloWorld,
    RxDemo,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
