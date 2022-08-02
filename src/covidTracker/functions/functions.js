export const isObject = (object) => object ? object.constructor === Object : false
export const generateStateList = (data) => isObject(data) ? Object.entries(data).map((e) => ( { name: e[0], value: e[1], districts: Object.entries(e[1]?.districts ?? {})?.map(e => ({name: e[0], value: e[1]})) } )) : []