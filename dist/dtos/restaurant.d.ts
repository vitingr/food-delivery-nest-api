export declare class CreateRestaurant {
    ownerId: string;
    email: string;
    cellphone: string;
    ownerName: string;
    ownerLastname: string;
    cpf: string;
    rg: string;
    orgaoEmissor: string;
    cnpj: string;
    restaurantName: string;
    telephone: string;
    street: string;
    city: string;
    state: string;
    address: number;
    speciality: string;
    delivery: string;
    creatorEmail: string;
}
export declare class getRestaurant {
    id: string;
}
export declare class updateRestaurant {
    id: string;
    ownerId: string;
    cellphone: string;
    ownerName: string;
    ownerLastname: string;
    restaurantName: string;
    telephone: string;
    street: string;
    city: string;
    state: string;
    address: number;
    speciality: string;
    delivery: string;
    logo: string;
    background: string;
    deliveryTime: string;
    deliveryValue: number;
    minValue: number;
    openingHour: number;
    closingHour: number;
}
export declare class findRestaurantBySpeciality {
    speciality: string;
}
