import React from 'react'
import { useState } from 'react'

const Section = ({name, description, isVisible, setIsVisible}) => {
    return (
        <div>
            <h1 className='font-bold m-5 p-5 text-5xl'>{name}</h1>
            
            
            { !isVisible?<button className='underline bg-slate-400' onClick={() => setIsVisible(true)}>Show </button>:
            <><button className='underline bg-slate-400' onClick={() => setIsVisible(!isVisible)}>Hide </button></>}
             {isVisible && <>
                <p className=' m-5 p-5 text-xl'>{description}</p>
                
            </>}
        </div>
    )
}


const Accordian = () => {
    const [sectionConfig, setSectionConfig] = useState("")
  return (
    <div>
        <Section name={'Class A'} isVisible={sectionConfig==="class A"} setIsVisible={() => {
            (sectionConfig==="class A")?setSectionConfig(null): setSectionConfig("class A")
        }} description={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}/>
        <Section name={'Class B'} isVisible={sectionConfig==="class B"} setIsVisible={()=>{
            (sectionConfig==="class B")?setSectionConfig(null): setSectionConfig("class B")
        }} description={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}/>
        <Section name={'Class C'} isVisible={sectionConfig==="class C"} setIsVisible={()=>{
            (sectionConfig==="class C")?setSectionConfig(null): setSectionConfig("class C")
        }} description={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}/>
    </div>
  )
}

export default Accordian