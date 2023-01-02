import { fork } from "redux-saga/effects";
import * as cocktail from "./cocktail";

const sagas = Object.values({
  ...cocktail,
});

export default function* rootSaga(getState) {
  for (let index = 0; index < sagas.length; index++) {
    yield fork(sagas[index]);
  }
}
