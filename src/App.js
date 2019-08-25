import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GetResquest } from './util/request';
import instagram from './images/index_icon/instagram-brands.svg';
import facebook from './images/index_icon/facebook-square-brands.svg';
import home from './images/index_icon/home-solid.svg';
import envelope from './images/index_icon/envelope-solid.svg';
import phone from './images/index_icon/phone-alt-solid.svg';


const ContainerWrapper = styled.div`

`;

const TopWrapper = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  opacity:0.64;
  background-image:${props => `url(${props.imageUrl})`};
  justify-content:center;
  width:100%;
  height:80vh;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  align-items:center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #FFFFFFFF;
    background: rgba(255,255,255,0.30);
    color: #FFFFFFFF;
    font-size: 31px;
    height: 148px;
    width: 148px;
    text-align: center;
    font-weight: 500;
`;

const HotelInfoWrapper = styled.div`
  display:flex;
  font-size:14px;
  color:#FFFFFFFF;
  justify-content:center;
  justify-content: start;
  margin: 15px;
  width: 20vw;
`;

const BrandGroup = styled.div`
  display:flex;
  justify-content:space-around;
  align-items: center;
  padding-right: 12px;
  > img {
    :nth-child(1) {
      margin-right:5px;
    }
    width:40px;
    height:40px;
  }
`;

const InfoGroup = styled.div`
  display:flex;
  flex-direction:column;
  border-left:1px solid #FFFFFFFF;
  margin-left:5px;
  padding-left: 15px;
  > p > img {
    width:20px;
    height:20px;    
  };

`;

const Informtion = styled.p`
  display:flex;
  > span {
    margin-left:5px;
  };
`;

const MainWrapper = styled.div`
  position:relative;
  display:flex;
  bottom: 5vh;
  flex-wrap: wrap;
  justify-content:center;
  width: calc(100% - 250px);
  margin-left: auto;
  margin-right: auto;
`;

const InfoWrapper = styled.div`
  width:300px;
  height:420px;
  margin: 10px 15px;
  background: #FFF7F7F7;  
  > img {
    width:100%;
    height:90%
  }
`;

const RoomDescription = styled.div`
    padding-top: 5px;
    padding-left: 10px;
`;

const RoomInfo = ({ imageUrl, name, price, holidayPrice }) => {
  return (
    <InfoWrapper>
      <img src={imageUrl} alt={name} />
      <RoomDescription>{name}</RoomDescription>

    </InfoWrapper>

  )
}


function App() {
  const [roomItems, setRoomItem] = useState([]);
  const [selectRoom, setSelectRoom] = useState(0);
  useEffect(() => {
    if (roomItems.length === 0) {
      GetResquest({ "url": "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms" }).then((response) => {
        console.log(response);
        if (response.data.success) {
          setRoomItem(response.data.items);

        } else {

        }
      })
    }

  })

  return (
    <ContainerWrapper>
      <TopWrapper imageUrl={roomItems.length > 0 && roomItems[2].imageUrl}>
        <Logo>White Space</Logo>
        <HotelInfoWrapper>
          <BrandGroup>
            <img src={instagram} />
            <img src={facebook} />
          </BrandGroup>

          <InfoGroup>
              <Informtion><img src={home} /> <span>02-17264937</span></Informtion>
              <Informtion><img src={envelope} /><span>whitespace@whitespace.com.tw</span></Informtion>
              <Informtion><img src={phone} /><span>台北市羅斯福路十段30號</span></Informtion>
          </InfoGroup>


        </HotelInfoWrapper>

      </TopWrapper>
      <MainWrapper>
        {
          roomItems.map((item, index) => {
            return (
              <RoomInfo key={index} imageUrl={item.imageUrl} name={item.name}>
              </RoomInfo>
            )
          })
        }
      </MainWrapper>
    </ContainerWrapper>
  );
}

export default App;
