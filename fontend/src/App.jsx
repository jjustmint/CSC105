import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import List from './components/List';
import TypeMe from './components/TypeMe';
import MyForm from './components/MyForm';
// const Colors = ["red", "green", "blue", "yellow"];

// function App() {
//   const [index, setIndex] = useState(0);
  
//   function handleChangeColor(){
//     if(index>=3){
//       setIndex(index % 3);
//       console.log(index);
//     }else{
//       setIndex(index+1);
//     }
//   }
//   // 
//    return <Card user={user} />;
  
// }

// export default App
const App = () => {
  return(
  //  <TypeMe />
   <MyForm />
  );
}
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  // return(
  //   <div className="App">
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" />
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );
  // function handlePlay(){
  //   alert('Playing');
  // }
  // function handleStop(){
  //   alert("Stop!");
  // }
  // return(
  //   <div className='App'>
  //     <AlertButton message = {"play"} onClick={handlePlay} />
  //     <AlertButton message = {"stop"} onClick={handleStop} />
  //   </div>
  // );
  // return (
  // <div className='App'>
  //   <AlertButton message={'Hi'} />
  //   <AlertButton message={'Hello'} />
  // </div>
  // );
  // function handleClick() {
  //   alert("You clicked!");
  // }
  // const users = [{
  //   name: 'Name: Petchpailin Saringkareekul',
  //   job: 'Job: Student',
  //   hobby: 'Hobby: Playing video games'
  // },
  // {
  //   name: 'Name: Petchpailin Saringkareekul',
  //   job: 'Job: Student',
  //   hobby: 'Hobby: Playing piano'
  // },
  // {
  //   name: 'Name: Petchpailin Saringkareekul',
  //   job: 'Job: Student',
  //   hobby: 'Hobby: Sleeping'
  // }]
  // return <List users = {users} />;
  // return(
  //   <div className='App'>
  //     <button onClick={handleClick}>Click me!</button>
  //   </div>
  // );
// function AlertButton({ message, onClick}){
//   return(
//     <button onClick={onClick}>{message}</button>
//   )
// }
// function AlertButton({message}){
//   function handleClick() {
//     alert(message);
//   }
//   return(
//     <button onClick={handleClick}>click me!</button>
//   )
// }

export default App;
