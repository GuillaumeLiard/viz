import tree1 from '~/static/dummyData/tree/1.js'
import tree2 from '~/static/dummyData/tree/2.js'
import tree3 from '~/static/dummyData/tree/3.js'
import tree4 from '~/static/dummyData/tree/4.js'
import tree5 from '~/static/dummyData/tree/5.js'

export const state = () => ({
  // label: "root",
  // weight: 1
  choice: 3,
  label: "root",
  choices: [
    tree1,
    tree2,
    tree3,
    tree4,
    tree5,
  ]
});

export const getters = {
  getLabel: state => state.choices[state.choice].label,
  getNodes: state => state.choices[state.choice].nodes,
  getCountChoices: state => {
    return state.choices.length
  }
};

export const mutations = {
  nextChoice: state => state.choice = (state.choice + 1) % getters.getCountChoices(state)
};
