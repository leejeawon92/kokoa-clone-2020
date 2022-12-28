import {atom, selector} from 'recoil';

const makeMessageCount = () => {
  const count = Math.floor(Math.random()*(30-1)+1);
  return count;
}

export const messageCount = atom({
  key: 'messagecount',
  default: [],
})



export const sumCount = selector({
  key: 'countSelector',
  get: ({get}) => {
  }
})