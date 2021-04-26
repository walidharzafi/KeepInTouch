import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Reply(props) {
  const {id} = useParams()
  // console.log(id);
  const [message,setMessage] = useState('')
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`http://localhost:5999/sendMail/${id}`,{message});
        if(res) props.history.push('/')
      } catch (error) {
        if(error) console.log(error.response);
      }
  }
  const handleChange = (e)=>{
    console.log(e.target.value);
    setMessage(e.target.value)
  }
   const [contact,setContact]= useState([])

  const getContact =async ()=>{
   try {
      const {data} = await axios.get(`http://localhost:5999/contact/singlecontact/${id}`);
    if(data) setContact(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  useEffect(()=>{
    getContact()
  },[])
  return (
     <div className="container">
     {
       contact && (
         <>
              <h1> Repondre </h1>
          <p>
            <span>A : {contact.lastName} {contact.firstName}</span> 
          </p>
          <p>
            <span>Email :  {contact.email}</span> 
          </p>
          <p>
            <span>Message :{contact.message} </span> 
          </p>
         </>
       )
     }

      <form>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Entre Your Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Reply