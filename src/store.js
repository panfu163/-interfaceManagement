import Vuex from "vuex";
/*
 * Vux全局 状态处理
 */
/**
 * 存储数据，存储状态
 * this.$store.state 来访问
 */
const state = {
  count: 0,
  tag: JSON.parse(localStorage.getItem("tagTitle"))
    ? JSON.parse(localStorage.getItem("tagTitle"))
    : [] //小页签
};

/**
 * @ mutations 里面放置的是我们操作state对象属性的方法\
 *  @ context.commit("mutationsAddCount") 参数对应
 */
const mutations = {
  mutationsAddCount(state, n) {
    state.count = state.count + n;
  },
  mutationsAddTag(state, arr) {
    state.tag = arr;
  }
};

/**
 * @ 注册actions,类似Mothods
 * @ this.$store.dispatch("actionsAddCount")
 */
const actions = {
  actionsAddCount(e, n) {
    return e.commit("mutationsAddCount", n);
  },
  actionsAddTag(e, n) {
    return e.commit("mutationsAddTag", n);
  }
};

/**
 * @ 注册getters,类似computed //通过方法访问
 * @  对应...mapGetters
 */
const getters = {
  getterCount(state) {
    return (state.count = state.count + 10);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
