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
              color: "red"
            },
            {
              label: "item1",
              color: "green"
            }
          ]
        },
        {
          label: "item1",
          nodes: [
            {
              label: "item1",
              color: "red"
            },
            {
              label: "item1",
              color: "green"
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
                  color: "red"
                },
                {
                  label: "item1",
                  color: "green"
                }
              ]
            },
            {
              label: "item1",
              nodes: [
                {
                  label: "item1",
                  color: "red"
                },
                {
                  label: "item1",
                  color: "green"
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
                  color: "red"
                },
                {
                  label: "item1",
                  color: "green"
                }
              ]
            },
            {
              label: "item1",
              nodes: [
                {
                  label: "item1",
                  color: "red"
                },
                {
                  label: "item1",
                  color: "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "root3",
      nodes: [
        {
          label: "item1",
          color: "red",
          nodes: [
            {
              label: "item1",
              color: "red"
            },
            {
              label: "item1",
              color: "blue"
            },
            {
              label: "item1",
              color: "green"
            }
          ]
        }
      ]
    },
  ]
});

export const getters = {
  getLabel: state => state.choices[state.choice].label,
  getNodes: state => state.choices[state.choice].nodes
};

export const mutations = {
  nextChoice: state => state.choice = (state.choice + 1) % 3
};
