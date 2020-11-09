//purpose: to create a context object and export it
// reason: so we can import the context onject into only the component wher we need it
// in this app language context only nees to stay on app and button. so its is seperated

import React from "react";

export default React.createContext("english");

//after creating a context object, we will:  get info into the obj by setting up adefault value
//creating default value: passing it directly into the create context call
//i am choosing english. that means, in the 2 nested child component got by default selected language is showing on screen is english

// aftre having default value of context objct: now connect the context obj to button component and fild component

// connect context object to button: by using this.context property
