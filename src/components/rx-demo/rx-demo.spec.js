import { shallowMount } from '@vue/test-utils';
import RxDemo from './rx-demo';

jest.mock('./msg.stream.js', () => {
  const { mockSubject } = require('../../../test/unit/util');
  return mockSubject('mock-data');
});

describe('<rx-demo/>', () => {
  it('Rx 订阅成功，文本渲染正确', () => {
    const wrapper = shallowMount(RxDemo);
    expect(wrapper.find('.rx-demo').text()).toEqual('mock-data');
  });
});
