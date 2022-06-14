import React, { useState, useMemo } from 'react'

export default function UseMemo() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const handleIncrement = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info'>UseMemo Hook</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <div>
                            <h2>My Todos</h2>
                            {todos.map((todo, index) => {
                                return <p key={index}>{todo}</p>;
                            })}
                            <button className='btn btn-success' onClick={addTodo}>Add Todo</button>
                        </div>
                        <hr />
                        <div>
                            Count: {count}<br />
                            <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
                            <h2>Expensive Calculation</h2>
                            {calculation}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
