import { post } from "./apiCaller";


export const createOrderPaypal = (amount: number) => {
    return post(`/paypal/create-order`, {amount});
}

export const captureOrderPayPal = (orderID: number) => {
    return post(`/paypal/capture-order/${orderID}`)
}