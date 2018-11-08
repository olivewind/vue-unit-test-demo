<template>
  <div class="rx-demo">{{msg}}</div>
</template>

<script>

import msg$$ from './msg.stream';

export default {
  name: 'RxDemo',
  data() {
    return {
      msg: '',
    };
  },
  created() {
    msg$$.subscribe((res) => {
      this.msg = res;
    });
  },
};

</script>

<style scoped>
.rx-demo{
  border: 1px solid #000;
  width: 600px;
  margin: 0 auto;
}
</style>
