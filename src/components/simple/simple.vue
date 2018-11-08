<template>
  <div>
    <div class="header">{{msg}}</div>
    <div>
      <complex></complex>
    </div>
  </div>
</template>

<script>

import Complex from './children/complex';

export default {
  name: 'Simple',
  data() {
    return {
      msg: 'simple',
    };
  },
  components: {
    Complex,
  },
};

</script>
