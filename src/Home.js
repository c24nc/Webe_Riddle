import { auth } from "./firebase";
import { useState } from "react";




const Home = ({ user }) => {

  const [answer, setAnswer] = useState(" ");

  function submit() {
    if (answer == "House Assignment Lab") {
      alert("you win");
    }
  }

  return(
    <div>
      <b>Logged in!</b>
      <p>Hello, {user.displayName}</p>

      <img src= "finalyoucantbookme.png" width="800px"/>

      <form onSubmit={submit}>
          <label>
            Name:
            <input type="text" value={answer} onChange={(event)=>setAnswer(event.target.value)}/>
          </label>
          <input type="submit" />
        </form>

      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
