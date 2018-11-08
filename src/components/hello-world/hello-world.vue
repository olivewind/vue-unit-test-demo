<template>
  <div>
    <h1 v-show="GLOBAL.logined">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject: ['GLOBAL'],
  data() {
    return {
      msg: 'Hello Jest',
    };
  },
};
</script>
