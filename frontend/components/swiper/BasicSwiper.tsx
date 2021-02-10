import React from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const BasicSwiperWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
`; 

 
const SwiperItemComp = styled(Swiper)`
.swiper_item_inner{
  width:100%;
  height:100%;
  border-radius:10px;
  overflow:hidden;
  position:relative;
  cursor:pointer;
  .info{
    width:100%;
    padding:10px;
    position:absolute;
    bottom:10px;
    .title{color:#fff;font-size:12px;}
  }
}    
img{width:100%;height:100%;object-fit:cover;}

.gra_bg{
  width:100%;height:100%;position:absolute;right:0;bottom:0;
}  

@media (min-width: 992px) { 

  .swiper_item_inner{
    .info{
      .title{font-size:16px;}
    }
  }    
}


  // 커스텀 애롱 사용시 주석 해제
  // .swiper-button-prev:after, .swiper-button-next:after{
  //   display:none;
  // }

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


interface SwiperItem{ 
  id: number;
  img_url: string;
  target_url: string;
  title?: string;
}

interface Props { 
  datas: SwiperItem[];  
  m: number;
  pc: number;
} 


const BasicSwiper = ({ datas, m, pc }:Props):JSX.Element=> { 
  
  const [windowWidth, setWindowWith] = React.useState(0); 
  
  const handleRedirect = (href: string) => { 
    window.location.href = href;
    return; 
  }
  
  React.useEffect(() => {
    setWindowWith(window.innerWidth);
  }, []);
  
  return (
    <BasicSwiperWrapper>
       <SwiperItemComp
        spaceBetween={10}  
        slidesPerView={windowWidth < 992 ? m : pc}  
        speed={400}
        navigation
        autoplay  
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true} 
      >
        
        {datas.map((item:SwiperItem) => ( 
          <SwiperSlide key={item.img_url + item.target_url}> 
             <div className="swiper_item_inner">
              
              {item.title && (
                <>
                  <img className="gra_bg" src='/asset/black_gradient.png' alt='gra_bg' />
                  <div className="info">
                    <span className="title">{item.title}</span>
                  </div>
                </>  
              )}
              
              <img src={item.img_url} alt="banner" onClick={() => { handleRedirect(item.target_url) }} /> 
            </div>
          </SwiperSlide>          
        ))} 

      </SwiperItemComp>  
    </BasicSwiperWrapper>
  )

}

export default BasicSwiper;