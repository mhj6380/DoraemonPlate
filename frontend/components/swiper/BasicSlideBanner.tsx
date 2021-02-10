import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const BasicSlideBannerWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;

`;


const SwiperItem = styled(Swiper)`
  img{width:100%;height:100%;object-fit:cover;}
  // 커스텀 애롱 사용시 주석 해제
  // .swiper-button-prev:after, .swiper-button-next:after{
  //   display:none;
  // }

  .swiper_item_inner{
    // height:350px !important;
    // overflow:hidden !important;
    cursor:pointer;
    width:100%;
    height:100%;
  }
  .swiper-button-prev,.swiper-button-next{
    color: #fff;
  }
  
  // 커스텀 애롱 사용시 주석 해제
  // .swiper-button-prev{
  //   background-image: url('../../asset/test.jpg');
  // }

  // .swiper-button-next{
  //   background-image: url('../../asset/test.jpg');
  // }
  
`;


interface BannerItem{
  id: number;
  img_url: string;
  target_url: string;
}

interface Props { 
  datas: BannerItem[]; 
}


const BasicSlideBanner = ({ datas }:Props):JSX.Element=> {
  
  const handleRedirect = (href: string) => {
    window.location.href = href;
    return;
  }
  
  return (
    <BasicSlideBannerWrapper>
       <SwiperItem
        spaceBetween={0}  
        slidesPerView={1}
        speed={400}
        navigation
        autoplay  
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true} 
      >
        {datas.map((item:BannerItem) => (
          <SwiperSlide key={item.img_url + item.target_url}>
            <div className="swiper_item_inner">
              <img src={item.img_url} alt="banner" onClick={() => { handleRedirect(item.target_url) }} /> 
            </div>
          </SwiperSlide>          
        ))} 

      </SwiperItem>
    </BasicSlideBannerWrapper>
  )

}

export default BasicSlideBanner;