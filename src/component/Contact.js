import React from "react"
import './Contact.css'


function Contact(props){
    let myStyle={
        color:props.mode==='rgb(181, 181, 209)'?'black':'white',
        backgroundColor:props.mode==='rgb(181, 181, 209)'?'white':'#6c757d',
    }
    return (
        <div>
          <div className='contact'>
              <h2>Contact Us</h2>
          </div>
          <div className='container'>
           <span>Name   <input type='text' style={myStyle} id='name' className='input' name='name' placeholder='Enter Your Name'/></span>
             <span>Mobile No. <input type='text' style={myStyle} id='no' className='input' name='no' placeholder='Enter Your Mobile No'/></span>
             <span>Email ID <input type='text'style={myStyle} id='email' className='input' name='email' placeholder='Enter Your E,mail Id'/></span>
             <span>Suggestion <input type='textarea'style={myStyle} className='input' id='suggestion' name='suggestion' placeholder='Your Advice'/></span>
             <button  style={myStyle} className='button'> Submit</button>
             </div>
        </div>
    )
}
export default Contact