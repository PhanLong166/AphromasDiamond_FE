import AuthForm from "@/components/AuthForm";
import { RegisterFields } from "@/components/AuthForm/AuthForm.fields";
import config from "@/config";
import { useDocumentTitle } from "@/hooks";
import { registerCustomer } from "@/services/authAPI";
import cookieUtils from "@/services/cookieUtils";
import { PageEnum } from "@/utils/enum";
import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    useDocumentTitle('Register | Aphromas Diamond');

    const[isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const[messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values: any) => {
        try {
            setIsSubmitting(true);

            const { data } = await registerCustomer(values);

            if (!data.data) throw data.error;
            else {
                await messageApi.success('Register Successfully!')
                cookieUtils.setItem(config.cookies.token, data.data.token);
                navigate(config.routes.public.login);
            }
        } catch (error: any) {
            if(error.response) messageApi.error(error.response.data);
            else messageApi.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const redirect = {
        description: 'Have an account?',
        title: 'Login now',
        url: config.routes.public.login
    }
    
    return (
        <>
            {contextHolder}
            <AuthForm
                page={PageEnum.REGISTER}
                formTitle="Register"
                buttonTitle="Register"
                fields={RegisterFields}
                redirect={redirect}
                onFinish={onFinish}
                reverse
                isSubmitting={isSubmitting}
            />
        </>
    )
}

export default Register;