export const setType = projectType => ({
  type: 'SET_TYPE',
  projectType
});

export const setSubType = subType => ({
  type: 'SET_SUBTYPE',
  subType
});

export const setMetric = metric => ({
  type: 'SET_METRIC',
  metric
});

export const setAdditionalParameter = additionalParameter => ({
  type: 'SET_ADDITIONAL_PARAMETER',
  additionalParameter
});

export const setEnergyBalance = energyBalance => ({
  type: 'SET_ENERGY_BALANCE',
  energyBalance
});

export const setEmissionReduction = emissionReduction => ({
  type: 'SET_EMISSION_REDUCTION',
  emissionReduction
});

export const setN = n => ({
  type: 'SET_N',
  n
});

export const setP = p => ({
  type: 'SET_P',
  p
});

export const setCircularProcurement = circularProcurement => ({
  type: 'SET_CIRCULAR_PROCUREMENT',
  circularProcurement
});

export const setEducational = educational => ({
  type: 'SET_EDUCATIONAL',
  educational
});

export const calculate = payload => ({
  type: 'CALCULATE',
  payload
});
