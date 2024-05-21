import styled from 'styled-components';

export const SwiperContainer = styled.div`
    width: 100%;
    height: 600px;
`;

export const SwiperWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SwiperSlide = styled.div`
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const SwiperButtonNext = styled.div`
    color: #fff;
    padding-right: 25px;
`;

export const SwiperButtonPrev = styled.div`
    color: #fff;
`;

export const SwiperPagination = styled.div`
    /* CSS của chỉ số trang */
`;
