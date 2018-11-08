import { shallowMount } from '@vue/test-utils';
import UserInfo from './user-info';
import UserApi from '../../apis/user';

// mock 掉 user 模块
jest.mock('../../apis/user');

// 指定 getUserInfo 方法返回假数据
UserApi.getUserInfo.mockResolvedValue({
  name: 'olive',
  desc: 'software engineer',
});

describe('<user-info/>', () => {
  const wrapper = shallowMount(UserInfo);
  test('getUserInfo 有且只 call 了一次', () => {
    expect(UserApi.getUserInfo.mock.calls.length).toBe(1);
  });
  it('用户信息渲染正确', () => {
    expect(wrapper.find('.name').text()).toEqual('olive');
    expect(wrapper.find('.desc').text()).toEqual('software engineer');
  });
});
