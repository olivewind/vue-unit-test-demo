import { shallowMount } from '@vue/test-utils';
import HelloWorld from './hello-world';

describe('<hello-world/>', () => {
  const wrapper = shallowMount(HelloWorld);
  it('should render correct contents', () => {
    expect(wrapper.find('h1').isVisible()).toBe(false);
  });
});
