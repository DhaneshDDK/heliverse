const BASE_URL = "http://localhost:4000/api/users";

export const userEndpoints = {
    GET_USERS : BASE_URL + "/getAllUsers",
    FETCH_USER : BASE_URL + "/",
    FETCHUSER_BY_FILTERS : BASE_URL + '/findByFilters'
}