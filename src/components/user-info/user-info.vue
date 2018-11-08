<template>
  <div class="user-info">
    <div class="name">{{user.name}}</div>
    <div class="desc">{{user.desc}}</div>
  </div>
</template>

<script>

import UserApi from '../../apis/user';

export default {
  name: 'UserInfo',
  data() {
    return {
      user: {},
    };
  },
  created() {
    UserApi.getUserInfo()
      .then((user) => {
        this.user = user;
      });
  },
};
</script>
