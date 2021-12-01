import React from 'react';
import './About.css';
import img from './../assets/GHFF (1).jpg'
const About = () => {
    return (
        <div>
            <h2 className="center my-3 text-success">About Me</h2>
<div class="card-group">
  <div style={{width:"70%"}}>
  
    <div class="card-body">
      <h5 class="card-title">MD SUMON ALI</h5>
      <p>I am a hardworking, self-assured Full-Stack Web developer.
          I am the expert in HTML CSS and Javascript,React,Node.js,Expressand MongoDB.
          I wishes to put my experience and personal expertise to use in the field of web development. 

          I am dedicated to building easy-to-use, user-friendly websites and applications. Often ready to represent a professional organization with sincere devotion,
 hard work, and determination to the best of my knowledge. I am looking for an opportunity to work in a challenging organization to update my skills and knowledge and work for the growth of the organization.
</p>
    
    </div>
   
  </div>
  <div className="mx-auto" >
   
   
    <img src={img} style={{height:"220px",width:"200px"}} className="rounded-circle " alt="Cinque Terre"/>
</div>
 

</div>
    
    {/* <>
        <div>
           <img src="https://i.ibb.co/tJp0mjc/GHFF.jpg" alt="" height="400px" width="70%"/>
        </div>
        <div>
           <h1>Dream big</h1>
           <h2>become  a web developer</h2>
           <p>I already learned the basic HTML and CSS.I can build any simple website. I can even tech my grandma how to make simple website.My goal is to build 3 websites and learn advanced topics</p>
           <a class="link-button" href="https://www.facebook.com/ali.sir2020/">download resume</a>
        </div>
    </>
    <p><h1>experience</h1></p>
    <section>
        <h1></h1>
        <div id="full-stack" class="experience-area">
<h1> full stack web developer</h1>
<h2>2022-present pro level developer</h2>
<p>I am the master of HTML CSS and Javascript.I know everything needed to make a website function ,efficient.I didn't stop with the web.I went beyond with most popular javascript framework called vue JS.I even know the deployment,server and security.I will give you 100% web solution.</p>
        </div>
        <div id="baby-web" class="experience-area">
<h1>Baby web developer</h1>
<h2>2021-2022 programming hero learner</h2>
<p>They didn't offer me a job.But I made myself as a remove web developer.i made their website and showed to them.They liked it and uploaded the contect.It was fun working at programming Hero.</p>
        </div>
    </section>
    <footer> <p>&COPY; MD SUMON ALI
        <a href="mdsumonaliceng.com">mdsumonaliceng.com</a></p></footer>
        </div> */}
        </div>
    );
};

export default About;