export declare class ResponseDto<T> {
    status: number;
    data: T;
    message: string;
    constructor(status: number, data: T, message: string);
}
