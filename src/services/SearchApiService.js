class BaseApi {
    _baseUrl = 'https://team5.uber.space';

    async get(url) {
        const response = await fetch(url);
        return response.json();
    }
}

export class SearchApiService extends BaseApi {

    getSearchResult(customer, searchValue) {
        let endpoint = '';
        switch (searchValue) {
            default:
                endpoint = '/';
                break;
            case 'Milch':
                endpoint = '/milch';
                break;
            case 'Brot':
                endpoint = '/bread';
                break;
            case 'Käse':
                endpoint = '/kaese';
                break;
        }

        let searchUrl = `${this._baseUrl}${endpoint}?customer=${customer}`;

        console.log("API Get Abfrage mit URL: "+searchUrl)

        return this.get(searchUrl);
    }
}