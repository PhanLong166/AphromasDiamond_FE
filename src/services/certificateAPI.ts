import { get, post, put } from "./apiCaller"

export const certificateShowAll = () => {
    return get(`/certificate/showAll`);
}

export const certificateDetail = (CertificateID: number) => {
    return get(`/certificate/${CertificateID}`);
}

export const createCertificate = (Certificate: object) => {
    return post(`/certificate/create`, Certificate);
}

export const updateCertificate = (CertificateID: number, Certificate: object) => {
    return put(`/certificate/update/${CertificateID}`, Certificate);
}