/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "@/config";
import { post, put, remove } from "./apiCaller"

export const uploadImage = (
    fileList: any[], 
    productID?: number,
    diamondID?: number,
    jewelryID?: number,
    certificateID?: number
) => {
    const formData = new FormData();
    fileList.map((file) => {
        formData.append('files', file);
    });
    formData.append('ProductID', productID ? productID.toString() : '');
    formData.append('DiamondID', diamondID ? diamondID.toString() : '');
    formData.append('JewelrySettingID', jewelryID ? jewelryID.toString() : '');
    formData.append('CertificateID', certificateID ? certificateID.toString() : '');
    return post(
        `/usingImage/upload-entity`, 
        formData, 
        {}, 
        {'Content-Type':'multipart/form-data'}
    );
}

export const updateImage = (imageID: number, image: object) => {
    return put(`/usingImage/update/${imageID}`, image);
}

export const getImage = (imageID: number) => {
    return `${config.publicRuntime.API_URL}/usingImage/${imageID}`;
}

export const deleteImage = (imageID: number) => {
    return remove(`/usingImage/${imageID}`);
}