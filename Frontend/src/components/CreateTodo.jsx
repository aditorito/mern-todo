import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;   
            setTitle(value);         
        }}></input>
        <input  style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;   
            setDescription(value);         
        }}></input>

        <button
        onClick={() => {
            console.log("inside");
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description

                }),
                headers: {
                    "content-type":"application/json"
                }
            }).then(async function (res) {
                const json = await  res.json();
                console.log("added");
                alert("Todo added")
            })
        }}>Add a Todo</button>
    </div>
}