import { createStore } from "vuex";

export interface Iuser {
  token: string | null;
}
const user = createStore<Iuser>({
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
  },
});

export default user;
