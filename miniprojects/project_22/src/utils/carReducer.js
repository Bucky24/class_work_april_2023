import { ADD_CAR, REMOVE_CAR, START_CAR, STOP_CAR } from './actions';
import createId from './createId';

const defaultState = [
  {
    id: 1,
    make: 'Honda',
    model: 'Civic',
    year: '2008',
    isRunning: false,
  },
  {
    id: 2,
    make: 'Tesla',
    model: 'Y',
    year: '2021',
    isRunning: false,
  },
];

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_CAR: {
      const newCarId = createId(state);
      const newCar = { ...action.payload, id: newCarId };

      return [...state, newCar];
    }
    case REMOVE_CAR: {
      return state.filter((car) => {
        return car.id !== action.payload;
      });
    }
    case START_CAR: {
      const carIndex = state.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state[carIndex], isRunning: true };

      const carsCopy = [...state];
      carsCopy[carIndex] = updatedCar;

      return carsCopy;
    }
    case STOP_CAR: {
      const carIndex = state.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state[carIndex], isRunning: false };

      const carsCopy = [...state];
      carsCopy[carIndex] = updatedCar;

      return carsCopy;
    }
    default: {
      return state;
    }
  }
}

export function removeCar(id) {
  return {
    type: REMOVE_CAR,
    payload: id,
  };
}