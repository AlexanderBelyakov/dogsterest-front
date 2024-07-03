class dogsApi {
    private _baseUrl: string;

    constructor(options:{baseUrl: string}) {
        this._baseUrl = options.baseUrl
    }

    private _checkResponse(res: Response) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    getData() {
    return fetch(this._baseUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then(this._checkResponse);
    }
}

const api = new dogsApi({
    baseUrl: "https://random.dog/doggos"
})

export default api