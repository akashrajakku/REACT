import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/*
function temp(){
  return <h1>Akash Raj</h1>
}
*/

const avariable = "Hi I am a variable"
const ReactElement = React.createElement(
  'a', //type of tag
  {href: 'https://google.com', target:'_blank'}, //setAttribute() wala kaam
  'click me to visit google', // children wala kaam (relate it to customreact.js)
  //now comes every evaluated expression
  avariable
  // end of the day above expression, puri trh replace ho jata hai avariable ki value se , to agr hum avariable ki value me koi expression likh dein jaise ki if else , to ye object ke syntax ko overrule kr jaega aaur error aaega, isliye hum app.jsx me jo {variable_name} evaluated expression likhte h usme hum bs final output wala variable likhte hain na ki koi expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //below two methods gives equal output for calling function temp
  // temp() is similar to app.js as app.js too is a function and we can run our custom functions as well in the same manner as we run app.js
  // temp()
  // <temp />

  /*
   * but hum yahan apne cutom react ka koi object render ni krwa paenge, kyunki custom react me humne randered v ek custom likha tha jiske hisab se humne object bnaya tha pr agr humein react ka rendere use krna hai to humein react ke rendered ko kis way me input chahiye us hisab se object likhna hoga , yani ki mera custom react wala object react ki official library ke according likha jaega 
   

  ReactElement // since reactelement ek object hai to hum ise function ki trh call ni kr skte.. jaise ki reactelement() ya <reactelement /> */

  ReactElement

)
