import config from "@/config";
import { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { ContainerStyled } from "./Container.styled";

const Container: FC<PropsWithChildren> = ({ children }) => {
    const { pathname } = useLocation();
    const isWide = pathname.includes(config.routes.customer.account);

    return <ContainerStyled $isWide={isWide}>{children}</ContainerStyled>
}

export default Container;