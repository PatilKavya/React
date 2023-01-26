import React, { useState } from "react";
import UserList from "./components/Userlist/UserList";
import Warning from "./components/Warning/Warning";

import "./App.css";

const App = () => {
  const [valid, setValid] = useState(true);
  const [isValid,setIsValid] = useState(true);

  const listHandler = (user) => {
    if (user.name.trim().length === 0) {
      setValid(false); 
    }
    if(user.age<0){
      setIsValid(false)
      setValid(false)
    }
    
  };

  const okayHandler = (t) => {
setValid(t)
  }

  return (
    <div>
      {valid && (
        <div>
          <UserList onList={listHandler} />
        </div>
      )}
      {!valid && (
        <div>
          <Warning onOkay={okayHandler} val={isValid} />
        </div>
      )}
    </div>
  );
};

export default App;
