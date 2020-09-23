export function unique(array){
    const result = [];
    const map = new Map();
    for (const item of array) {
        if(!map.has(item.id)){
            map.set(item.id, true);    // set any value to Map
            result.push(item);
        }
    }
    return result
}