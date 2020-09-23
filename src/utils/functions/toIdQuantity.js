export function toIdQuantity(array){
    let idQuantity = {}
    array.forEach(element => {
        const id = element.id
        const hasProperty = idQuantity[id]
        if (hasProperty === undefined){
            idQuantity[id] = 1
        } else {
            idQuantity[id] += 1
        }
    });
    return idQuantity
}