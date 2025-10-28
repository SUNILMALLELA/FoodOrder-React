import React, { useReducer } from 'react'

function UseReducer() {
    const intialValue = {
        count: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "inc": {
                return { count: state.count + 1 }
            }
            case "dec": {
                return { count: state.count - 1 }
            }
            case "input": {
                return { count: Number(action.payload) }
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, intialValue)
    return (
        <>
            <h6>The usereducer hook is{state.count}</h6>
            <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
            <input type='number' value={state.count} onChange={(e) => dispatch({ type: "input", payload: e.target.value })}></input>
        </>
    )
}

export default UseReducer