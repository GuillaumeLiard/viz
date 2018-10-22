export const state = () => ({
  // label: "root",
  // weight: 1
  label: "root",
  nodes: [
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item1",
    },
    {
      label: "item2"
    }
  ]
  // nodes: [
  //   {
  //     label: "item1",
  //     nodes: [
  //       {
  //         label: "item1.1"
  //       },
  //       {
  //         label: "item1.2",
  //         nodes: [
  //           {
  //             label: "item1.2.1",
  //             value: 5
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     label: "item2"
  //   }
  // ]
});

export const getters = {
  getLabel: state => state.label,
  getNodes: state => state.nodes
};
