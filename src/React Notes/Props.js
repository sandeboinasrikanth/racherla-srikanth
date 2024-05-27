import React from 'react'

const data = [
    {
      title: "Money Heist",
      imgURL:
        "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum",
    },
    {
      title: "Stranger Things",
      imgURL:
        "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum.",
    },
    {
      title: "Lucifer",
      imgURL:
        "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdzLf-Q3OK2H03_O-TYenAtdtgEP9kHEK4Wov-JlvcJNPMiTwFtyZQ_eJ8yMtVrYzoc6mSbEyFAgqu9z-5P0-htUTbfc1AMpCtffuTkpgSJ_c8nM2GKlmkpcEHqoMsmfAmDY.jpg?r=501",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum.",
    },
    {
      title: "Money Heist",
      imgURL:
        "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum",
    },
    {
      title: "Stranger Things",
      imgURL:
        "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc_QuOdHzJa9WwBiBlfEvpcFRKq9TAIgdJv0KoSilQZ8JMEsdCdQS4VGD6gwVg2CYCYNhTJIald5uVsXbMf-3QaF1k1fnFRbovQr6ddWUtkSOUzil_dtlD1wOIeD_pSI6pAx.jpg?r=c68",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum.",
    },
    {
      title: "Lucifer",
      imgURL:
        "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdzLf-Q3OK2H03_O-TYenAtdtgEP9kHEK4Wov-JlvcJNPMiTwFtyZQ_eJ8yMtVrYzoc6mSbEyFAgqu9z-5P0-htUTbfc1AMpCtffuTkpgSJ_c8nM2GKlmkpcEHqoMsmfAmDY.jpg?r=501",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,nostrum.",
    },
  ];
  

function Props() {
  // let temparary = [<h1>Mango</h1>, <h1>Apple</h1>,<h1>Banana</h1>];
  // let newTemparary = data.map((eachObj)=>{
  //   return(
  //     <article>
  //       <h1>{eachObj.title}</h1>
  //       <img src={eachObj.imgURL} alt={eachObj.title} />
  //       <p>{eachObj.description}</p>
  //     </article>
  //   )
  // })
  return(
    <section className='movie-container'>
      {/* {newTemparary} */}
      {data.map((eachObj,index)=>{
        // console.log(eachObj);
        const {imgURL,title,description}=eachObj;
        return(  
          <Movie key={index} imgURL={imgURL} title={title} description={description} />
        )
      })}
      {/* <Movie 
        imgURL={data[0].imgURL} 
        title={data[0].title} 
        description={data[0].description} 
      />
      <Movie 
        imgURL={data[1].imgURL} 
        title={data[1].title} 
        description={data[1].description} 
      /> */}
    </section>
  )
}

const Movie=({imgURL,title,description})=>{
  // console.log(props)
  // const {imgURL,title,description}= props;
  return (
    <article className='each-movie'>
      <img src={imgURL} alt="Netflix image Show" />
      <h3>{title || "Random Title"}</h3>
      <p>{description || "Alternative Description for Temporary"}</p>
    </article>
  )
}

export default Props

////passing Aruguments & parameter values
// function getData(firstname,lastname){
//   console.log(firstname +" "+  lastname)
// }
// getData("Emma","Watson")



//Destructuring
// function getData(userObj){
//   const {firstName:newName, lastName} = userObj;
//   // const firstName = userObj.firstName
//   // const lastName = userObj.lastName
//   console.log(newName)
//   console.log(lastName)

// }
// getData({
//   firstName:"emma",
//   lastName:"watson",
// })
