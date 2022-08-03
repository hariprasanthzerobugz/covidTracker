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