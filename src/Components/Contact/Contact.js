import React from 'react';

const Contact = () => {

    return (
        <div className="center ">
         <h2 className="text-primary my-3">Contact with me </h2>
            <form action="https://formsubmit.co/mdsumonaliceng@gmail.com" method="POST">
            <input style={{height:"30px",width:"18%"}} placeholder="Enter your name" type="text" name="name" required/> <br/>
     <input style={{height:"30px",width:"18%"}}  placeholder="Enter your email" type="email" name="email" required/> <br/>
     <textarea name="message" placeholder="Enter your message"  id="" cols="30" rows="10"></textarea>  <br/>
     <button type="submit">Send</button>
</form>
        </div>
    );
};

export default Contact;