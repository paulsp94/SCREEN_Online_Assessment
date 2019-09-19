export const projects = {
  Production: {
    'Circular Design': {
      description: `Re-shaping the first stage of an industrial process (Product design) in order to reduce the waste generated AND/OR increase the life of the final product`,
      metrics: `Kg/year of virgin material avoided through the new process AND/OR by the prolongation of the product's life`,
      additionalParameters: `Economic value of  the virgin material (€/Kg)`
    },
    'New production process accepting "secondary raw material"': {
      description: `Replacement , total or partial, of virgin material with "secondary raw material" `,
      metrics: `Kg/year of virgin material avoided through the new process`,
      additionalParameters: `Economic value of  the virgin material (€/Kg)`
    }
  },
  Consumtion: {
    'Re-Use, Re-Manufacturing, Refurbishment, Repair': {
      description: `Prolongation of the life of a certain product that otherwise will be
      disposed`,
      metrics: `Kg/year of virgin material avoided by the prolongation of the product's life`,
      additionalParameters: `Economic value of  the virgin material (€/Kg)`
    },
    'Waste reduction': {
      description: `The new process generates less waste`,
      metrics: `Kg/year`,
      additionalParameters: `Cost of disposal (€/Kg)`
    }
  },
  Disposal: {
    'Industrial simbiosys: mass of waste resources recovered and reintroduced in a production cycle as secondary raw material': {
      description: `The new process generates waste that can be re-used in the same
      process or in another production process`,
      metrics: `Kg/year`,
      additionalParameters: `Economic value of the secondary raw material(€/Kg)minus Cost of its transport to the production site (€/Kg)`
    },
    'Project promoting waste recycling': {
      description: `Promotional campaign with a specific target producing a specific
      waste`,
      metrics: `Waste collected by the target Kg/year`,
      additionalParameters: `Cost of disposal (€/Kg)`
    }
  }
};

export const steps = [
  'Select project type',
  'Add metrics and additional parameters',
  'Climate metrics',
  'Employment metrics',
  'Circular procurment or educational project'
];
