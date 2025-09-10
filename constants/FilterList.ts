export enum Filters {
    Age = "Age",
    Gender = "Gender",
    Glasses = "Glasses",
    Smile = "Smile",
    Mask = "Mask",
    Hairstyle = "Hairstyle",
    AgeGroup = "Age Group",
    JacketType = "Jacket Type",
    Bag = "Bag",
    TrousersType = "Trousers Type",
    ColorOfJacket = "Color of jacket",
    ColorOfTrousers = "Color of trousers",
}

export enum VehicleFilters {
    VehicleBrand = "vehicle-filter__select--1",
    VehicleType = "vehicle-filter__select--2",
    LicensePlateType = "vehicle-filter__select--3",
    SortPassingTime = "vehicle-filter__select--4",
}

export enum Age {
    all = "All",
    child = "Child",
    young = "Young",
    middle = "Middle",
    elderly = "Elderly",
    unknown = "Unknown",
}

export enum Gender {
    all = "All",
    male = "Male",
    female = "Female",
    unknown = "Unknown",
}

export enum Glasses {
    all = "All",
    yes = "Yes",
    no = "No",
    unknown = "Unknown",
}

export enum Smile {
    all = "All",
    yes = "Yes",
    no = "No",
    unknown = "Unknown",
}

export enum Mask {
    all = "All",
    yes = "Yes",
    no = "No",
    unknown = "Unknown",
}

export enum Hairstyle {
    all = "All",
    shortHair = "Short Hair",
    longHair = "Long Hair",
    unknown = "Unknown",
}

export enum AgeGroup {
    all = "All",
    child = "Child",
    young = "Young",
    middle = "Middle",
    elderly = "Elderly",
    unknown = "Unknown",
}

export enum JacketType {
    all = "All",
    shortSleeve = "Short Sleeve",
    longSleeve = "Long Sleeve",
    unknown = "Unknown",
}

export enum Bag {
    all = "All",
    yes = "Yes",
    no = "No",
    unknown = "Unknown",
}

export enum TrousersType {
    all = "All",
    shorts = "Shorts",
    pants = "Pants",
    skirt = "Skirt",
    unknown = "Unknown",
}

export enum ColorOfJacket {
    all = "All",
    white = "White",
    silver = "Silver",
    gray = "Gray",
    black = "Black",
    red = "Red",
    darkBlue = "Dark Blue",
    blue = "Blue",
    yellow = "Yellow",
    green = "Green",
    brown = "Brown",
    pink = "Pink",
    purple = "Purple",
    darkGray = "Dark Gray",
    cyan = "Cyan",
    orange = "Orange",
    mixture = "Mixture",
    unknown = "Unknown",
}

export enum ColorOfTrousers {
    all = "All",
    white = "White",
    silver = "Silver",
    gray = "Gray",
    black = "Black",
    red = "Red",
    darkBlue = "Dark Blue",
    blue = "Blue",
    yellow = "Yellow",
    green = "Green",
    brown = "Brown",
    pink = "Pink",
    purple = "Purple",
    darkGray = "Dark Gray",
    cyan = "Cyan",
    orange = "Orange",
    mixture = "Mixture",
    unknown = "Unknown",
}

// Mapping of Filter → enum
const FilterValuesMap = {
    [Filters.Age]: Age,
    [Filters.Gender]: Gender,
    [Filters.Glasses]: Glasses,
    [Filters.Smile]: Smile,
    [Filters.Mask]: Mask,
    [Filters.Hairstyle]: Hairstyle,
    [Filters.AgeGroup]: AgeGroup,
    [Filters.JacketType]: JacketType,
    [Filters.Bag]: Bag,
    [Filters.TrousersType]: TrousersType,
    [Filters.ColorOfJacket]: ColorOfJacket,
    [Filters.ColorOfTrousers]: ColorOfTrousers,
};

export function getFilterValue(filter: keyof typeof Filters): string {
    return Filters[filter];
}

export function getFilterKey(value: string): keyof typeof Filters | undefined {
    return Object.keys(Filters).find(
        key => Filters[key as keyof typeof Filters] === value
    ) as keyof typeof Filters | undefined;
}