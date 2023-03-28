import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
import TodoPage from "./pages/TodoPage";
function App(){
    return (
        // <div className="App">
        //     <div className="home">
        //         <Home />
        //     </div>
        //     <div className="todo">
        //         <Todo />
        //     </div>
        // </div>
        <TodoPage />
    );
}
export default App;