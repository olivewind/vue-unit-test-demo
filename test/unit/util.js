import { BehaviorSubject } from 'rxjs';

function mockSubject(data) {
  return new BehaviorSubject(data);
}

export {
  mockSubject,
};
