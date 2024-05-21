import { useEffect, useRef } from 'react';
import { SwiperContainer, SwiperWrapper, SwiperSlide, SwiperButtonNext, SwiperButtonPrev, SwiperPagination } from './Home.styled';
import Swiper from 'swiper';

const Home = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });

            return () => {
                swiper.destroy();
            };
        }
    }, []);

    return (
        <SwiperContainer ref={swiperRef} className="mySwiper">
            <SwiperWrapper>
                <SwiperSlide>
                    <img src="/HomePage/Image/banner1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/HomePage/Image/banner2.png" alt="" />
                </SwiperSlide>
            </SwiperWrapper>
            <SwiperButtonNext />
            <SwiperButtonPrev />
            <SwiperPagination />
        </SwiperContainer>
    );
}

export default Home;

