export type FaceByFeatureFilter = {
    age?: string,
    gender?: string,
    glasses?: string,
    smile?: string,
    mask?: string,
    [key: string]: string | string[] | undefined,
};

export type BodyByFeatureFilter = {
    Glasses?: string,
    Hairstyle?: string,
    AgeGroup?: string,
    JacketType?: string,
    Bag?: string,
    TrousersType?: string,
    ColorOfJacket?: string,
    ColorOfTrousers?: string,
    [key: string]: string | string[] | undefined,
};

export type VehicleFilter = {
    VehicleBrand?: string[];
    VehicleType?: string[];
    LicensePlateType?: string;
    SortPassingTime?: string;
    VehicleColor?: string[];
    LicensePlateColor?: string[];
    [key: string]: string | string[] | undefined;
};

export type LoginBody = {
    userName?: string,
    userPwd?: string,
    publicKey?: string,
    clientIP?: string,
};

export type LoginHeader = {
    Accept?: string,
    "Content-Type"?: string,
    "X-Ca-Key"?: string,
    "x-ca-signature"?: string,
    "x-ca-signature-headers"?: string,
};

export type AppViewShortInfoItem = {
    filter: FaceByFeatureFilter,
    collectLocation: string | null,
    collectTime: string | null,
}