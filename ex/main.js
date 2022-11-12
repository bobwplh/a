function convertItems(items) {
    const Arr = items.map(x => x.split ("|"))
    return Arr
}
function filterItems(items){
    const Fltr = items.filter( i => i.length > 2).map( y => [y[0], ~~y[1], y[2]])
    return Fltr
}
function generateSpareParts(items) {
    let array=[]
    for (let i = 0; i < items.length; i++) {
        let result= {};
        result.name =  items[i][0]
        result.price = items[i][1]
        result.category = items[i][2]
        array.push (result)
    }
   return array
}
function itemsStatistics(items) { 
    let variation = [];
    let bodyParts = [];
    let electricity = [];
    let result = {};
    for (let i = 0; i < items.length; i++) {
        if (items[i][2] === "variation"){
            variation.push(items[i][2])
        } else if (items[i][2] === "bodyParts"){
            bodyParts.push(items[i][2])
        } else {
            electricity.push(items[i][2])
        }
        
    }
    result.variation = variation.length
    result.bodyParts = bodyParts.length
    result.electricity = electricity.length

    return result

}

function generateItemsData(items) {
    let convert = convertItems(items)
    let filter = filterItems(convert)
    let sparepart = generateSpareParts(filter)
    let statistik = itemsStatistics(filter)
    let result = {};
        result.spare_parts = sparepart
        result.statistics = statistik
            return result

}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}