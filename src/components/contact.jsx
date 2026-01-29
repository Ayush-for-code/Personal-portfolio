import React,{useState} from 'react'
import fiver from "/images/fiver.png";
import upwork from "/images/upwork.jpg";

export default function Contact() {

const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e)=>{
e.preventDefault()
const data = {email,phone,message};
console.log(email,phone,message)
try{
  const response = await fetch("http://localhost:5000/send-email",
     { method: "POST", headers: { "Content-Type": "application/json", }
     , body: JSON.stringify(data), }); 
     const result = await response.json();
      if (result.success) { alert("Email sent successfully!");
         setEmail("");
          setPhone("");
           setMessage("");
           } 
      else { alert("Error: " + result.error); }

}
catch (err){
console.error("Frontend Error:", err); alert("Something went wrong.");
}
}

  return (
<>
<div className='contact'>
  <form className='contact-field' onSubmit={handleSubmit}>
      <h2>CONTACT FORM</h2>  
 <h3>EMAIL</h3>
<input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='YOUR EMAIL' />
 <h3>PHONE NO</h3>
<input type="text" maxLength="12" value={phone} onChange={(e)=>setPhone( e.target.value)} placeholder="YOUR NUMBER"  />
<h3>COMMENT</h3>
<textarea name="comment"  value={message} onChange={(e)=>setMessage( e.target.value)} placeholder='YOUR MESSAGE ' id=""></textarea>
<button>SEND</button>
  </form>
   
  
</div>
<div className='freelance'>
  <h2>LETS WORK TOGETHER</h2>
  <div className="flexbox">
    <div className='glass'>
    <a target="_blank" href="https://www.fiverr.com/s/Gz41KRz"> <img  className="fiver" src={fiver}  alt="icons" /></a>
  </div>
  <div className='glass'>
    <a target="_blank" href="https://www.upwork.com/freelancers/~0198dadebd2363918b?mp_source=share"> <img src={upwork}  alt="icons" /></a>
  </div>
  </div>
</div>
</>
  )
}
