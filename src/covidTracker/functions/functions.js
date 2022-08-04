export const isObject = (object) => object ? object.constructor === Object : false
export const generateStateList = (data) => isObject(data) ? Object.entries(data).map((e) => ( { name: e[0], value: e[1], districts: Object.entries(e[1]?.districts ?? {})?.map(e => ({name: e[0], value: e[1]})) } )) : []
export const generateStateListWithDate = (data) => isObject(data) ? Object.entries(data).map((e) => ( { name: e[0], dates: Object.entries(e[1]?.dates ?? {})?.map(e => ({name: e[0], value: e[1]})) } )) : []
export const searhByName = (value, listData) => {
    if (value && listData?.length) {
        value = value.toLowerCase().trim();
        return listData.filter(({name}) => name && name.toLowerCase().indexOf(value) !== -1 || !value ? true : false)
    } else {
        return listData
    }
}
export const sortAscTotalConfirmed = (array) => {
    if(array && array.length) {
       return array.sort((a,b) => a.value.total.confirmed-b.value.total.confirmed)
    } else return []
}
export const sortDescTotalConfirmed = (array) => {
    if(array && array.length) {
       return array.sort((a,b) => b.value.total.confirmed-a.value.total.confirmed)
    } else return []
}
export const sortAscTotalAffected = (array) => {
    if(array && array.length) {
       return array.sort((a,b) => a.value.total.deceased-b.value.total.deceased)
    } else return []
}
export const sortDescTotalAffected = (array) => {
    if(array && array.length) {
       return array.sort((a,b) => b.value.total.deceased-a.value.total.deceased)
    } else return []
}
export const sortAscTotalVaccinated = (array) => {
    if(array && array.length) {
       return array.sort((a,b) => a.value.total.vaccinated1-b.value.total.vaccinated1)
    } else return []
}
export const sortDescTotalVaccinated = (array) => {
    if(array && array.length) {
       return array.sort((a,b) => b.value.total.vaccinated1-a.value.total.vaccinated1)
    } else return []
}
export const sortAsc = (array, column) => {
    if(array && array.length) {
       return array.sort((a,b) => a[column]-b[column])
    } else return []
}
export const sortDesc = (array, column) => {
    if(array && array.length) {
       return array.sort((a,b) => b[column]-a[column])
    } else return []
}