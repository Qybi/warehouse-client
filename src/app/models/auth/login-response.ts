export interface LoginResponse {
    isSuccessful: boolean;
    credentials: Credentials;
}

export interface Credentials {
    username: string;
    tokenExpDate: string;
    token: string;
    roles: string[];
    studentId?: number;
}
