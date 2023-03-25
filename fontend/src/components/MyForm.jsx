import React,{useState} from "react";

// function MyForm(){
//     const[name, setName] = useState("");

// return(
//     <form>
//         <label>Enter your name:
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//         </label>
//     </form>
// )
// }
function MyForm(){
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[lastname,setLastname] = useState("");
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    var phonepattern = /^[0-9]+$/;
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("It's OK")
    }
    function handleEmailChange(n){
        setEmail(n.target.value)
    }
    function handleNameChange(n){
        setName(n.target.value)
    }
    function handleLastNameChange(n){
        setLastname(n.target.value)
    }
    function handlePhonenumberChange(n){
        if(n.target.value.match(phonepattern)){
            setPhone(n.target.value)
        }else{
            setPhone("")
        }
    }
    function handlePasswordChange(n){
        setPassword(n.target.value)
    }
    return(
        <div className='form'>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email Address:
                    <input type="text" name="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
                    <br/>
                    Name:
                    <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleNameChange} required />
                    <br/>
                    Lastname:
                    <input type="text" name="lastname" placeholder="Enter lastname" value={lastname} onChange={handleLastNameChange} required />
                    <br/>
                    Phone Number
                    <input type="tel" pattern="^\d{10}$" name="phone" placeholder="Enter Phone Number" value={phone} onChange={handlePhonenumberChange}required/>
                    <br/>
                    Password:
                    <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                    <br/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default MyForm;