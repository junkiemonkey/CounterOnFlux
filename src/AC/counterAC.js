import AppDispatcher from '../dispatcher';

export function countUp(count){
  const action = {
    type: 'COUNT_UP',
    payload: {
      count
    }
  };

  AppDispatcher.dispatch(action);
}