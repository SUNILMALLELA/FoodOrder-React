import React, { useReducer } from 'react'
function UseReducer() {
    const intialValue = {
        count: 0
    };
    function reducer(state, action) {
        if (action.type == "Increment") {
            return { count: state.count + 1 }
        }
    }
    const [state, dispatch] = useReducer(reducer, intialValue)
    return (
        <>
            <h2>The intial count start from a {state.count}</h2>
            <button onClick={() => dispatch({ type: "Increment" })}>Add</button>
        </>
    )
}

export default UseReducer





// import React, { useReducer } from 'react'
// function UseReducer() {
//     function reducer(state, action) {
//         if (action.type == "inc") {
//             return state + 1
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, 0)
//     return (
//         <>
//             <h1>The count start from a {state}</h1>
//             <button onClick={() => dispatch({ type: "inc" })}>Add</button>
//         </>
//     )
// }

// export default UseReducer