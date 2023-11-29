import React, { useState } from 'react'

function Home() {
  const [inputs, setInputs] = useState({
    Hieght:"",
    Weight:""
  })

const inp = (event)=>{
  setInputs({ ...inputs,
    [event.target.name]: event.target.value
  })
}

const [mas, setMas] = useState()
const [image, setImage] = useState()

const calculate = ()=>{
  const h = inputs.Hieght / 100;
  const bmi =  (inputs.Weight / (h * h));
  // console.log(bmi);
  // console.log("hello");
  if (inputs.Hieght == "") {
    alert('Fill all the inputs')
  } else {
    
    if (bmi <= 18.4) {
      setMas('Low');
      setImage('https://cdn.discordapp.com/attachments/1166697835136294932/1179390601289007104/HuMkd435ZpH4uZ8cq9evANhVx4u8ttiMUkMNopnnebPucCWV1bjlZFhYWFhYWFhYWFhYWFhcUn8X8EjOKEytVC2AAAAABJRU5ErkJggg.png?ex=65799c17&is=65672717&hm=c2c5a9063cb95e7943d9d989c7b3d6a81b66fb2f6d6f18a6fe624983b8cb254f&')
    } else if (bmi >= 18.5 && bmi <25) {
      setMas('Perfect')
      setImage('https://cdn3.iconfinder.com/data/icons/body-size-process/238/body-size-process-009-512.png')
    } else if (bmi >= 25) {
      setMas('High')
      setImage('https://creazilla-store.fra1.digitaloceanspaces.com/icons/3429988/overweight-icon-md.png')
    }
  }
}

  return (
    <> 
    
<div className='flex flex-col justify-center items-center h-screen bg-black'>
    <div className='bg-white flex flex-col p-10'>
        <label className='p-1' htmlFor="">Hieght:</label>
        <input className='border'  name='Hieght' placeholder='your Hieght' value={inputs.Hieght} onChange={inp}/>

        <label className='p-1' htmlFor="">Weight:</label>
        <input className='border'  name='Weight' placeholder='your weight' value={inputs.Weight} onChange={inp}/>

        <button className='mt-5 bg-black text-white' onClick={calculate}>Calculate</button>
        <hr />

        <p>Your mass is: {mas}</p>
        <img className='h-80 max-w-40' src={image} alt="" />

    </div>
</div>
</>
  )
}

export default Home