// response.dto.ts
export class ResponseDto<T> {
  status: number;
  data: T;
  message: string;

  constructor(status: number, data: T, message: string) {
    this.status = status;
    this.data = data;
    this.message = message;
  }
}
