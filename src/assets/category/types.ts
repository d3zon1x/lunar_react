import { IProductItem } from "../product/list/types";

export interface ICategoryCreate {
    name: string;
    file: File|undefined;
    description: string;
}

export interface IUploadedFile {
    originFileObj: File
}

export interface ICategoryItem {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface ICategoryEdit {
    id: number;
    name: string;
    file: File|undefined;
    description: string;
}

export interface IGetCategories {
    content: ICategoryItem[],
    totalPages: number,
    totalElements: number,
    number: number
}

export interface ICategorySearch{
    name: string,
    page: number,
    size: number
}

export interface IGetProducts{
    list: IProductItem[],
    totalCount: number
}

export interface IProductSearch{
    name?: string,
    description?: string,
    category?: string,
    page: number,
    size: number
}