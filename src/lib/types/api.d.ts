declare type SuccessResponse= {
    message: string;
}

declare type ErrorResponse= {
    message: string;
    statusCode: number;
}

declare type ApiResponse = SuccessResponse | ErrorResponse