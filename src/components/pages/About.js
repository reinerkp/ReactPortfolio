import React from "react";
import Picture from '../Assets/portrait.jpg'
export default function About() {
  return (
    <div>
      <article id="aboutme" class="aboutme">
            <h2>About Me!</h2>
           
      <div className="pic1">
        <img className="pic2" src={ Picture } alt="Katherine Reiner"></img>
    </div>
            <p>Hi! My name is Katherine Reiner, and I am currently a student at the Univsersity of Denver's coding bootcamp. Below you will find a portfolio of different applications that I have developed throughout my carrer. These applications show an array of skills using JAVASCRIPT, HTML, and CSS. Currently, I work at Charles Schwab on the Trader Services Team as a liscnesed broker. I am interested in using both my finance and web development skills in the future. I am a Colorado native, inheritely meaning that I love to be outside. I also love to travel, in the new year I hope to do my first international travel. Please reach out with any questions, contact informaiton is provided below.</p>
         </article>
    </div>
  );
}
