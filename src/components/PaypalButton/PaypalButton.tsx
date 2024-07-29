import { captureOrderPayPal, createOrderPaypal } from "@/services/paymentAPI";
import { Button } from "antd";
import { useState } from "react";

interface PayPalButtonProps {
    amount: number;
    onSuccess: (details: any) => void;
    onError: (error: any) => void;
}

const PayPalButon: React.FC<PayPalButtonProps> = ({
    amount,
    onSuccess,
    onError
}) => {
    const [loading, setLoading] = useState(false);
    
    const createOrder = async () => {
        try {
            const { data } = await createOrderPaypal(amount);
            return data.id;
        } catch (error: any) {
            console.error(error);
        }
    };

    const captureOrder = async (orderID: any) => {
        try {
            const { data } = await captureOrderPayPal(orderID);
            return data; 
        } catch (error: any) {
            console.error(error);
        }
    }

    const handleClick = async () => {
        setLoading(true);
        try {
            const orderID = await createOrder();
            const paymentURL = `https://www.sandbox.paypal.com/checkoutnow?token=${orderID}`;
            window.location.href = paymentURL;
            const captureDetail = await captureOrder(orderID);
            onSuccess(captureDetail);
        } catch (error: any) {
            onError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleClick}
            disabled={loading}
            htmlType="submit"
            type="primary"
        >
            {loading ? 'Processing...' : 'Pay with Paypal'}
        </Button>
    )
};

export default PayPalButon;