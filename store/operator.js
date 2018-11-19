import { line } from 'd3-shape'
import operator from '~/assets/data/operator_or.json'

export const state = () => ({
  choice: 0,
  choices: [
    operator,
  ]
});

export const getters = {
  getData: state => state.choices[state.choice],
  getLoss: state => getters.getData(state).map(d => d.history.loss[0]),
  getLossXY: state => getters.getLoss(state).map((d, i) => {
    return {
      x: i,
      y: d
    }
  }),
  getLine: state => {
    console.log("line", line);
    // var line = line()
    //   .x(function(d) { return x(d.x) })
    //   .y(function(d) { return y(d.y) })
    // return line(getters.getLossXY(state))
    return 'abc'
  },
  getCountChoices: state => {
    return state.choices.length
  }
};

export const mutations = {
  nextChoice: state => state.choice = (state.choice + 1) % getters.getCountChoices(state)
};
