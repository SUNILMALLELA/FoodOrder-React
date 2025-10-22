import React, { useReducer } from 'react'

function UseReducerForm() {
    const intialObject = {
        email: "",
        pass: ""
    }
    function reducer(state, action) {
        switch (action.type) {
            case "ChangeInput":
                return { ...state, [action.field]: action.value }
            case "Reset":
                return intialObject
            default:
                return state
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!state.email || !state.pass) {
            alert("please fill the fields")
            return;
        }
        alert(`Login Sucessful ${state.email} ${state.pass}`)
        dispatch({ type: "Reset" })

    }
    const [state, dispatch] = useReducer(reducer, intialObject)
    return (
        <>
            <h1>FormData using UseReducer:</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter the Email' value={state.email} onChange={(e) => dispatch({ type: "ChangeInput", field: "email", value: e.target.value })}></input>
                <input type='password' placeholder='Enter the password' value={state.pass} onChange={(e) => dispatch({ type: "ChangeInput", field: "pass", value: e.target.value })}></input>
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default UseReducerForm