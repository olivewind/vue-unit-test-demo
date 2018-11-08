import { shallowMount } from '@vue/test-utils';
import Simple from './simple';

jest.mock('./children/complex.vue', () => ({
  render(h) {
    h();
  },
}));

describe('<simple/>', () => {
  const wrapper = shallowMount(Simple, {
    stubs: ['user-info'],
  });

  it('文本渲染正确', () => {
    expect(wrapper.find('.header').text()).toEqual('simple');
  });
});
