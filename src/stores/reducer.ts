import { combineReducers } from '@reduxjs/toolkit'

import calculatorReducer from 'stores/features/calculators'

const rootReducer = combineReducers({
  calculators: calculatorReducer,
})

export default rootReducer
