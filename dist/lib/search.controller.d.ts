import searchRepository from 'src/repositories/search-repository';
export declare class SearchController {
    private searchRepository;
    constructor(searchRepository: searchRepository);
    getItemsByText(text: string): Promise<string>;
}
