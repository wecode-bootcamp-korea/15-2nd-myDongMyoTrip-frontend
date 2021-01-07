import styled from "styled-components"

import { Link } from "react-router-dom"
import { mainThemeArr, discountArr, recommendationArr } from "./mainData"

function AccommodationMain() {
  return (
    <AccommodationMainWrap>
      <MainImg />
      <Title>어떤 숙소 찾으세요?</Title>
      <MainThemeBox>
        {mainThemeArr.map((theme) => (
          <Link to="/accommodation_list">
            <ThemeImg key={theme.id} alt={theme.alt} src={theme.src} />
          </Link>
        ))}
      </MainThemeBox>
      <>
        <SubTitle>할인 혜택</SubTitle>
        <DiscountImgBox>
          {discountArr.map((discount) => (
            <DiscountImg
              key={discount.id}
              alt={discount.alt}
              src={discount.src}
            />
          ))}
        </DiscountImgBox>
      </>
      <>
        <SubTitle>에디터 추천</SubTitle>
        <RecommendationImgBox>
          {recommendationArr.map((recommendation) => (
            <RecommendationImg
              key={recommendation.id}
              alt={recommendation.alt}
              src={recommendation.src}
            />
          ))}
        </RecommendationImgBox>
      </>
    </AccommodationMainWrap>
  )
}

export default AccommodationMain

const AccommodationMainWrap = styled.div`
  position: relative;
  width: 1242px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 40px;
  position: absolute;
  top: 230px;
  left: 50px;
  color: whitesmoke;
`

const MainImg = styled.img.attrs(() => ({
  alt: "Main Image",
  src: "/images/mainImg.jpg",
}))`
  display: block;
  margin: 50px auto;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
`

const MainThemeBox = styled.div`
  position: absolute;
  top: 300px;
  left: 70px;
`

const ThemeImg = styled.img`
  width: 270px;
  height: 150px;
  cursor: pointer;
`

const SubTitle = styled.h2`
  display: block;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`

const DiscountImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const DiscountImg = styled.img`
  width: 610px;
  height: 160px;
  cursor: pointer;
`

const RecommendationImg = styled.img`
  width: 400px;
  height: 270px;
  cursor: pointer;
`

const RecommendationImgBox = styled(DiscountImgBox)`
  margin-bottom: 50px;
`
