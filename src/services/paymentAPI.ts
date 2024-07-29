import { post } from "./apiCaller";


export const createOrderPaypal = (amount: number) => {
    return post(`/paypal/create-order`, {amount});
}

export const captureOrderPayPal = (orderID: string) => {
    return post(`/paypal/capture-order/${orderID}`)
}