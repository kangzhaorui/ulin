import { getEvents, getProcessList } from '@/api/dashboard';
import NProgress from 'nprogress';

const dashboard = {
  state: {
    events: [], // 日历事件数据
    selectedDay: new Date(), // 当前选中日期
    startDay: '', // 当前日历开始日期
    endDay: '', // 当前日历结束日期
    scheduleData: [], // 事务提醒
    processData: [], // 流程处理
    processPagination: { // 流程处理的分页
      pageSize: 10,
      current: 1,
    },
  },

  mutations: {
    SET_EVENTS: (state, events) => {
      state.events = events;
    },
    SET_PROCESS_LIST_DATA: (state, data) => {
      // state.scheduleData = data.schedule || [];
      state.processData = data.process || [];
      state.processPagination.total = data.processTotal || 0;
    },
    SET_SELECTED_DAY: (state, day) => {
      state.selectedDay = day;
    },
    SET_START_END_DAY: (state, { start, end }) => {
      state.startDay = start;
      state.endDay = end;
    },
  },

  actions: {
    // 获取日历数据
    GetEvents({ commit }, eventsObj) {
      return new Promise((resolve, reject) => {
        getEvents(eventsObj).then((res) => {
          const events = [];
          const data = res.data;
          for (const i in data) {
            events.push({
              title: data[i],
              start: i,
              end: i,
            });
          }
          commit('SET_EVENTS', events);
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 获取选择日的日程信息
    GetProcessList({ commit }, obj) {
      NProgress.start();
      return new Promise((resolve, reject) => {
        getProcessList(obj).then((res) => {
          NProgress.done();
          if (res.code === '200') {
            commit('SET_PROCESS_LIST_DATA', res.data);
          }
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    SetSelectedDay({ commit }, day) {
      commit('SET_SELECTED_DAY', day);
    },

    SetStartEndDay({ commit }, { start, end }) {
      commit('SET_START_END_DAY', { start, end });
    },
  },
};

export default dashboard;
