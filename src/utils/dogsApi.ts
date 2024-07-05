class dogsApi {
  private _baseUrl: string;

  constructor(options: { baseUrl: string }) {
    this._baseUrl = options.baseUrl;
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

  getSavedData() {
    return fetch(this._baseUrl + "/saved", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(this._checkResponse);
  }

  saveCard(id: number, link: string) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, link }),
    }).then(this._checkResponse);
  }
}

const api = new dogsApi({
  baseUrl: "http://localhost:8080",
});

export default api;
