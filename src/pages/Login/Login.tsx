import Link from "@/components/Link";
import config from "@/config";
import { useDocumentTitle } from "@/hooks";
import { login } from "@/services/authAPI";
import cookieUtils from "@/services/cookieUtils";
import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoTypo } from "./Login.styled";
import { PageEnum } from "@/utils/enum";
import { LoginFields } from "@/components/AuthForm/AuthForm.fields";
import AuthForm from "@/components/AuthForm";


const Login = () => {
    useDocumentTitle('Login | Aphromas Diamond');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values: any) => {
        try {
            setIsSubmitting(true);

            const { data } = await login(values);

            if (!data.data) throw data;
            else {
                await messageApi.success('Login successfully');
                cookieUtils.setItem(config.cookies.token, data.data.token);
                navigate(config.routes.public.home);
            }
        } catch (error: any) {
            if (error.response) messageApi.error(error.response.data);
            else messageApi.error(error.statusCode === 404 ? "This account haven't created" : error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const redirect = {
        description: "Don't have account?",
        title: 'Register now',
        url: config.routes.public.register,
    };

    const description = (
        <Link to={config.routes.public.home} underline scroll>
            <LogoTypo>Aphromas Diamond</LogoTypo>
        </Link>
    )

    return (
        <>
            {contextHolder}
            <AuthForm
                page={PageEnum.LOGIN}
                formTitle="Welcome back"
                buttonTitle="Login"
                fields={LoginFields}
                description={description}
                redirect={redirect}
                onFinish={onFinish}
                isSubmitting={isSubmitting}
            />
        </>
    )
}

export default Login;