export const projects = {
  Production: {
    'Circular Design': {
      description: `Re-shaping the first stage of an industrial process (Product design) in order to reduce the waste generated AND/OR increase the life of the final product`,
      metric: `Kg/year of virgin material avoided through the new process AND/OR by the prolongation of the product's life`,
      additionalParameter: `Economic value of  the virgin material (€/Kg)`,
      weight: 5
    },
    'New production process accepting "secondary raw material"': {
      description: `Replacement , total or partial, of virgin material with "secondary raw material" `,
      metric: `Kg/year of virgin material avoided through the new process`,
      additionalParameter: `Economic value of  the virgin material (€/Kg)`,
      weight: 8
    }
  },
  Consumtion: {
    'Re-Use, Re-Manufacturing, Refurbishment, Repair': {
      description: `Prolongation of the life of a certain product that otherwise will be
      disposed`,
      metric: `Kg/year of virgin material avoided by the prolongation of the product's life`,
      additionalParameter: `Economic value of  the virgin material (€/Kg)`,
      weight: 8
    },
    'Waste reduction': {
      description: `The new process generates less waste`,
      metric: `Kg/year`,
      additionalParameter: `Cost of disposal (€/Kg)`,
      weight: 10
    }
  },
  Disposal: {
    'Industrial simbiosys: mass of waste resources recovered and reintroduced in a production cycle as secondary raw material': {
      description: `The new process generates waste that can be re-used in the same
      process or in another production process`,
      metric: `Kg/year`,
      additionalParameter: `Economic value of the secondary raw material(€/Kg)minus Cost of its transport to the production site (€/Kg)`,
      weight: 8
    },
    'Project promoting waste recycling': {
      description: `Promotional campaign with a specific target producing a specific
      waste`,
      metric: `Waste collected by the target Kg/year`,
      additionalParameter: `Cost of disposal (€/Kg)`,
      weight: 6
    }
  }
};

export const steps = [
  'Select project type',
  'Add metric and additional parameters',
  'Climate metric',
  'Employment metric',
  'Circular procurment or educational project'
];
