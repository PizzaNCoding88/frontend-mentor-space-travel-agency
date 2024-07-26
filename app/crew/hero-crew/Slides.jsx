import React from "react";
import Slide from "./Slides.module.css";
import Image from "next/image";
import Douglas from "../../assets/crew/image-douglas-hurley.png";

const Slides = (props) => {
  const { crew, index } = props;
  //   {
  //     console.log(crew);
  //   }
  return (
    <>
      <div className={Slide.container}>
        <div className={Slide.job}>{crew.role}</div>
        <div className={Slide.fullname}>{crew.name}</div>
        <p className={Slide.description}>{crew.bio}</p>
        {/* <div className={Slide.slideIndicator}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        <Image
          alt="crew"
          src={crew.images.png}
          width={200}
          height={200}
          className="text-center"
        />
      </div>
    </>
  );
};

export default Slides;
// import React from "react";
// import Slide from "./Slides.module.css";
// import Image from "next/image";
// import Douglas from "../../assets/crew/image-douglas-hurley.png";

// const Slides = (props) => {
//   const { data, index } = props;
//   {
//     console.log(data);
//   }
//   return (
//     <div className={Slide.container}>
//       <p className={Slide.job}>{data[index].role}</p>
//       <h1 className={Slide.fullname}>Douglas Hurley</h1>
//       <p className={Slide.description}>
//         Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
//         and former NASA astronaut. He launched into space for the third time as
//         commander of Crew Dragon Demo-2.
//       </p>
//       <div className={Slide.slideIndicator}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <div className={Slide.pictureContainer}>
//         <Image
//           alt="crew"
//           src={Douglas}
//           objectFit="contain"
//           fill
//           className="w-full h-full top-0 left-0 !relative"
//         />
//       </div>
//     </div>
//   );
// };

// export default Slides;
