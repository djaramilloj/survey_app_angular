export interface userSignUp {
    email: string;
    name: string;
    password: string;
}

export interface userLogIn {
    email: string;
    password: string;
}

export interface pcBrand {
    id: number;
    name: string;
}

export interface Survey {
    email: string;
    brand: number;
    doc: number;
    comments: string;
}