import AddressRepository from '../repositories/address-repository';
import { createAddress } from '../dtos/address';
export declare class AddressController {
    private addressRepository;
    constructor(addressRepository: AddressRepository);
    createAddress(body: createAddress): Promise<void>;
    getAddress(userId: string): Promise<string>;
    getAddressById(addressId: string): Promise<string>;
    getAllAddress(): Promise<string>;
}
