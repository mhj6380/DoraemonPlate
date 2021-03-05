import * as React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import styled from "styled-components";
import BasicSlideBanner from "components/swiper/BasicSlideBanner";
import BasicSwiper from "components/swiper/BasicSwiper"; 


// .mainImageSlider {
//     .swiper-slide {
//         height: 45vw !important;
//         background: #ededed;

//         img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//         }
//     }
// }


// /*Medium devices (tablets, 768px and up)*/
// @media (min-width: 768px) {

//     .mainImageSlider {
//         .swiper-slide {
//             height: 35vw !important;
//         }
//     }
// }

// @media (min-width: 992px) {
//     .mainImageSlider {
//         .swiper-slide {
//             height: 30vw !important;
//         }
//     }
// }

// @media (min-width: 1200px) {
//     .mainImageSlider {
//         .swiper-slide {
//             height: 25vw !important;
//         }
//     }
// }

const ExSwiperWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
`;

const Spacer = styled.div`
width:100%;
height:40px;
`;
interface Props { 

} 

const dummy = [
  {
    id: 1,
    img_url: "https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364_1280.png",
    target_url: "https://youtube.com"
  },
  {
    id: 2,
    img_url: "https://media.istockphoto.com/vectors/realistic-illustration-of-landscape-with-coniferous-forest-with-pine-vector-id1158011388?b=1&k=6&m=1158011388&s=170667a&w=0&h=ssnGikCgKrjimtd0w_yaAAIrMqJc0LDmF9ctPqu6Ur8=",
    target_url: "https://youtube.com"
  },
  {
    id: 2,
    img_url: "https://media.istockphoto.com/vectors/realistic-illustration-of-landscape-with-coniferous-forest-with-pine-vector-id1158011388?b=1&k=6&m=1158011388&s=170667a&w=0&h=ssnGikCgKrjimtd0w_yaAAIrMqJc0LDmF9ctPqu6Ur8=",
    target_url: "https://youtube.com"
  },
  {
    id: 3,
    img_url: "https://cdn.pixabay.com/photo/2020/12/26/16/52/pasture-5861901_1280.jpg",
    target_url: "https://youtube.com"
  },
  {
    id: 4,
    img_url: "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg",
    target_url: "https://youtube.com"
  },
  {
    id: 5,
    img_url: "https://media.istockphoto.com/photos/mysterious-bluetoned-forest-pathway-footpath-in-the-dark-foggy-cold-picture-id1193906801?b=1&k=6&m=1193906801&s=170667a&w=0&h=8AcpJZrUxbD9V5QH9G5Os4vqD-qbQAb9lc9lKxBa1Wk=",
    target_url: "https://youtube.com"
  },
];



const dummyWithTitle = [
  {
    id: 1,
    img_url: "https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364_1280.png",
    target_url: "https://youtube.com",
    title: "타이틀 제목입니다"
  },
  {
    id: 2,
    img_url: "https://media.istockphoto.com/vectors/realistic-illustration-of-landscape-with-coniferous-forest-with-pine-vector-id1158011388?b=1&k=6&m=1158011388&s=170667a&w=0&h=ssnGikCgKrjimtd0w_yaAAIrMqJc0LDmF9ctPqu6Ur8=",
    target_url: "https://youtube.com",
    title: "타이틀이 길어진 경우엔 어떻게 표현하면 좋을까요?"
  },
  {
    id: 2,
    img_url: "https://media.istockphoto.com/vectors/realistic-illustration-of-landscape-with-coniferous-forest-with-pine-vector-id1158011388?b=1&k=6&m=1158011388&s=170667a&w=0&h=ssnGikCgKrjimtd0w_yaAAIrMqJc0LDmF9ctPqu6Ur8=",
    target_url: "https://youtube.com",
    title: "타이틀이 길어진 경우엔 어떻게 표현하면 좋을까요?"
  },
  {
    id: 3,
    img_url: "https://cdn.pixabay.com/photo/2020/12/26/16/52/pasture-5861901_1280.jpg",
    target_url: "https://youtube.com",
    title: "타이틀이 길어진 경우엔 어떻게 표현하면 좋을까요?"
  },
  {
    id: 4,
    img_url: "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg",
    target_url: "https://youtube.com",
    title: "타이틀이 길어진 경우엔 어떻게 표현하면 좋을까요?"
  },
  {
    id: 5,
    img_url: "https://media.istockphoto.com/photos/mysterious-bluetoned-forest-pathway-footpath-in-the-dark-foggy-cold-picture-id1193906801?b=1&k=6&m=1193906801&s=170667a&w=0&h=8AcpJZrUxbD9V5QH9G5Os4vqD-qbQAb9lc9lKxBa1Wk=",
    target_url: "https://youtube.com",
    title: "타이틀이 길어진 경우엔 어떻게 표현하면 좋을까요?"
  },
];
 
const ExSwiper = ({  }:Props):JSX.Element=> {
  
  return (
    <ExSwiperWrapper>
      <Spacer />
      <h4>이미지 배너</h4> 
      <BasicSlideBanner datas={dummy} />
      <Spacer />
      <h4>이미지 배너</h4> 
      <BasicSwiper datas={dummy} m={3} pc={5} /> 
      <Spacer />
      <BasicSwiper datas={dummyWithTitle} m={3} pc={5}/> 
      <Spacer/>
    </ExSwiperWrapper> 
  )

}

export default ExSwiper;