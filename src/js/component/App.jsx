import React, { useEffect, useState } from "react"


export const App = () => {
    const [input, setInput] = useState("")
    const [tareas, setTareas] = useState([])

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleCancel = (index) => {
        tareas.splice(index, 1);
        setTareas([...tareas]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() !== "") {
            setTareas([...tareas, input])
            setInput("")
        }
    }

    return (
        <main className="container d-flex flex-column vh-100 justify-content-center align-items-center">
            <form id="form" className="col-auto border border-success p-4 rounded" onSubmit={handleSubmit}>

                <header className="d-flex justify-content-center align-items-center">
                    <h1 className="px-5">To Do List</h1>
                </header>

                <ul className="d-flex flex-column list-group w-100 mt-2 mx-0 border rounded">
                    <li className="list-group">
                        <input
                            type="text"
                            value={input}
                            className="w-100 p-2"
                            onChange={handleChange}
                            placeholder={tareas.length == 0 ? "Escribe la primera tarea:" : "Escribe una tarea:"}>
                        </input>
                    </li>
                    {tareas.map((tarea, index) =>
                    (<li key={index} className="list-group-item border p-2 d-flex justify-content-between ">
                        {tarea}
                        <button
                            type="button"
                            onClick={() => handleCancel(index)}
                            className="d-flex justify-content-center align-items-center text-danger border-0  bg-white">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </li>)
                    )}
                </ul>
                <footer className="mt-2">
                    <small>
                        {tareas.length == 0 ? "No hay tareas disponibles" : tareas.length == 1 ? tareas.length + " tarea disponible" : tareas.length + " tareas disponibles"}
                    </small>
                </footer>
            </form>
        </main>
    )
}

