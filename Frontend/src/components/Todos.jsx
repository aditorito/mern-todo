
import axios from 'axios';

export function Todo({ todos }) {
    return <div>
        {todos.map(function (todo) {

            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <div >
                    <button>{todo.completed == true ? "Completed" : "Mark as Complted"}</button>
                    <button style={{ margin: 20 }}>Edit</button>
                    <button
                        style={{ backgroundColor: "#FF2E2E" }}
                        onClick={async (e) => {
                            try {
                                const id = todo._id;
                                const url = "http://localhost:3000/delete/" + id;
                                const response = await axios.delete(url);
                            } catch (error) {
                                console.error("An error occurred while deleting the todo:", error);
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        })}
    </div>
}