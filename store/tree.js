export const state = () => ({
  // label: "root",
  // weight: 1
  choice: 0,
  label: "root",
  choices: [
    {
      label: "root1",
      nodes: [
        {
          label: "item1",
          nodes: [
            {
              label: "item1",
            },
            {
              label: "item1",
            }
          ]
        },
        {
          label: "item1",
          nodes: [
            {
              label: "item1",
            },
            {
              label: "item1",
            }
          ]
        }

      ]
    },
    {
      label: "root2",
      nodes: [
        {
          label: "item1",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1",
                },
                {
                  label: "item1",
                }
              ]
            },
            {
              label: "item1",
              nodes: [
                {
                  label: "item1",
                },
                {
                  label: "item1",
                }
              ]
            }
          ]
        },
        {
          label: "item1",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1",
                },
                {
                  label: "item1",
                }
              ]
            },
            {
              label: "item1",
              nodes: [
                {
                  label: "item1",
                },
                {
                  label: "item1",
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

export const getters = {
  getLabel: state => state.choices[state.choice].label,
  getNodes: state => state.choices[state.choice].nodes
};

export const mutations = {
  nextChoice: state => state.choice ? state.choice = 0 : state.choice = 1
};
