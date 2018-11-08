import Vue from 'vue';
import { config } from '@vue/test-utils';

Vue.config.productionTip = false;

// provide 的模拟
config.provide.GLOBAL = {
  logined: false,
};
