const BASE_URL = "https://userdatabasebackend.onrender.com/api/users";

export const userEndpoints = {
    CREATE_USER : BASE_URL + "/createUser",
    FETCH_USER : BASE_URL + "/",
    FETCHUSER_BY_FILTERS : BASE_URL + '/findByFilters'
}