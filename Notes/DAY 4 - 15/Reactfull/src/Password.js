import React from 'react'
import Sample1 from './sample1'
import Sample2 from './sample2'
var pass={
  Mypass : "Gaya123"
}
  var x = prompt("enter your password");

 function Password() {
   let res;
   if(x===pass.Mypass){
    res=<Sample1 />
   }
   else{
    res=<Sample2/>
   }
  return (

     <div >

      {res}
    </div>
  )
}

export default Password