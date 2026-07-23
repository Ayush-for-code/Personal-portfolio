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
<button>SEND<svg width="25px" height="25px" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#b0abab" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
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
