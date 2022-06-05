import { createSlice, PayloadAction, createEntityAdapter, Update } from "@reduxjs/toolkit"

export interface Item {
    ID: number
    price: string
    unit: string
    Price: number
    Unit: number
    pricePerUnit: number
}

let safeEval = (input: string): number => {
    try {
        let result = Function(`try { return (${input}); } catch (err) { return 0; }`)()
        return parseFloat(result)
    } catch (err: any) {
        return 0
    }
}

const itemsAdapter = createEntityAdapter<Item>({
    selectId: i => i.ID,
    sortComparer: (a, b) => {
        if (a.pricePerUnit == b.pricePerUnit) return 0
        return a.pricePerUnit < b.pricePerUnit ? -1 : 1
    }
})

const filledState = itemsAdapter.upsertMany(
    itemsAdapter.getInitialState(), 
    [0,1,2,3,4].map<Item>(i => ({
        ID: i,
        price: '',
        unit: '',
        Price: 0,
        Unit: 0,
        pricePerUnit: Infinity,
    }))
)

export const calculatorSlice = createSlice({
    name: 'calculators',
    initialState: filledState,
    reducers: {
        itemUpdated: (state, payload: PayloadAction<Update<Item>>) => {
            let price = safeEval(payload.payload.changes.price ?? state.entities[payload.payload.id]?.price ?? '')
            let unit = safeEval(payload.payload.changes.unit?? state.entities[payload.payload.id]?.unit ?? '')
            if (unit == 0 || price == 0) {
                payload.payload.changes.pricePerUnit = Infinity
            } else if (unit > 0) {
                payload.payload.changes.pricePerUnit = price / unit
            }
            payload.payload.changes.Price = price
            payload.payload.changes.Unit = unit
            return itemsAdapter.updateOne(state, payload)
        },
        itemsUpdated: itemsAdapter.updateMany,
    }
})

export const { itemUpdated, itemsUpdated } = calculatorSlice.actions

export default calculatorSlice.reducer
