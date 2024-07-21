/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, put, remove } from "./apiCaller";

export const showAllFeedback = (params: any) => {
    return get(`/feedback/showAll`, params);
}

export const createFeedback = (feedback: object) => {
    return post(`/feedback/create`, feedback);
}

export const updateFeedback = (id: number, feedback: object) => {
    return put(`/feedback/update/${id}`, feedback);
}

export const deleteFeedback = (id: number) => {
    return remove(`/feedback/delete/${id}`);
}