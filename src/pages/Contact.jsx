import { useState } from "react";
import { validateEmail } from '../utils/helpers';


export default function Contact() {
    return (
      <div>
        <h1>Contact</h1>

        <form>

       <label for="fname">Name</label>
      <input type="text" id="fname" name="fname"></input>

      <label for="email">Email</label>
      <input type="email" id="email" name="email"></input>

      <label for="message">Message</label>
      <textarea type="textarea" id="textarea" name="textarea"></textarea>

      <input type="submit" value="Submit"></input>

        </form>

      </div>
    );
  }