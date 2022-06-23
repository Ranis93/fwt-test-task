export default class Service {
    constructor() {
        this._apiBase = "https://test-front.framework.team";     //статичные данные нельзя трогать
    }
        getResource = async (url) => {                                          //метод для получения запроса по url
            const res = await fetch(`${this._apiBase}${url}`);                                 //GET запрос

            if (!res.ok) {                                                //метод ОК возвращает true если код ответа [200...299]
                throw new Error(`Could not fetch ${url}, 
            status: ${res.status}`);                                  //создаем сообщение об ошибке
            }
            return await res.json();                                      //перем. содержит ответ в формате JSON
        }
        getAllPaitings = async () => {                                              //возвратит всех 
            const res = await this.getResource(`/paintings`);
            return res;
        }

        getAllAuthors = async () => {                                              //возвратит всех 
            const res = await this.getResource(`/authors`);
            return res;
        }

        getAllLocations = async () => {                                              //возвратит всех 
            const res = await this.getResource(`/locations`);
            return res;
        }
}