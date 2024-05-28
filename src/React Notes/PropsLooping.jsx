import React from 'react'

function PropsLooping() {
    const names =["Mayuri","Abhay","Kavya"];

    const students = [
        {
            name:"Mayuri",
            pic:"https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp"
        },
        {
            name:"Abhay",
            pic:"https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png"
        },
        {
            name:"Kavya",
            pic:"https://lh3.googleusercontent.com/proxy/vZikguU11qZpIr5SgoBHDixru7qQYP3KFoXJQuGVUQwmaW1tOABH0jLlqFjFBH0bWZ4-TsP956vXScnfbo14sc4bjzDTwAtWxUaHetXijjXc_gizWe3FN01r3CUhkUZJ5Ogudyo98mZg406rnq27lvgAZkI8Nk4N4A"
        },
    ]

  return (
    <div>
        {/* component + loop */}
        {names.map((nm)=>{
        return <NameComp names={nm} />
        })}

        {students.map((stu)=>{
            const {name, pic} = stu
            return <LoopingMethod name={name} pic={pic} />
        })}
    </div>
  )
}

const LoopingMethod=({name,pic})=>{
    return(
        <section>
            
            <div className='profile-container'>
                <img className='profile-pic' src={pic} alt={name} />
                <h1>Hello,{name} </h1>
            </div>
        </section>
    )
}

const NameComp=({names})=>{
    return <div>
    <h2>{names}</h2>
</div>
}

export default PropsLooping
