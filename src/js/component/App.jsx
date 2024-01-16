import React, { useState } from "react";

export const App = () => {
    const [tareas, setTareas] = useState([]);
    const [valor, setValor] = useState("");

    const handleChange = (event) => {
        setValor(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (valor.trim() !== "") {
            setTareas([...tareas, valor]);
            setValor("");
        }
    }

    const handleCancel = (index) => {
        tareas.splice(index, 1);
        setTareas([...tareas]);
    }
    return (
        <main className="container d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="col-auto d-flex flex-column justify-content-center align-items-center border border-black">

                <header className="p-2">
                    <h1>Lista de Tareas</h1>
                </header>

                <ul className="border d-flex flex-column align-items-start w-100 list-unstyled m-0 border border-black">
                    <li className="w-100">
                        <input
                            type="text"
                            value={valor}
                            onChange={handleChange} 
                            placeholder={tareas.length === 0 ? "No hay tareas disponibles, escríbelas:" : "Escribe tarea:" }
                            className="w-100"
                        ></input>
                    </li>
                    {tareas.map((item, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center border w-100 p-1">
                            {item}  <button type="button" onClick={() => handleCancel(index)} className="btn btn-link">x</button>
                        </li>
                    ))}
                </ul>

                <footer className="d-flex justify-content-start align-items-center border-top p-1 w-100">
                    <small>{tareas.length} item(s) left</small>
                </footer>

            </form>
        </main>
    );
}

