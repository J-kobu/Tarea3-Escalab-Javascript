//Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
const filterOrdersByInredients = () => sandwichOrders.filter(sandwichOrder => (sandwichOrder.ingredients.includes('lechuga') && 
sandwichOrder.ingredients.includes('palta')))

//Función que me permita encontrar una orden a través del id y que me devuelva un string con el siguiente formato de ejemplo: 
//La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette). En caso de no encontrar nada a través del id, el mensaje, 
//a modo de ejemplo, deberá ser: No se encontró la orden con id (800)
const filterOrdersById = (id) => {
    const order = sandwichOrders.find(sandwichOrder => sandwichOrder.id === id)
    const {
        ordered,
        ingredients,
        bread
    } = order
    return order ? `La orden fue realizada el ${ordered}, la orden llevaba ${ingredients} y ${bread}` : 
    `No se encontró la orden con el id: ${id}`
}

//Función que me permita encontrar una orden a través del id y que me indique si la orden incluye pepinillos entre sus ingredients, 
//debería devolver un true|false como respuesta.
const getOrderByIdAskForPickles = (id) => sandwichOrders.find(sandwichOrder => sandwichOrder.id === id).ingredients.includes('pepinillos') ? true : false 

//Función que me permita encontrar todas las orden que se hicieron en un día en específico, es decir, si yo coloco 20-10-2020, la 
//función me debería devolver: Se encontraron N ordenes para la fecha 20-10-2020.
const getOrdersByDates = (date) => {
    const orders = sandwichOrders.filter(sandwichOrder => sandwichOrder.ordered === date)
    return `Se encontraron ${orders.length} ordenes para la fecha ${date}`
} 

//Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina not burger y de ingredients cebolla caramelizada
const getOrderDatesByNotBurgerAndCebollaCaramelizada = () => {
    const orders = sandwichOrders.filter(sandwichOrder => sandwichOrder.protein.includes('not burger') && 
    sandwichOrder.ingredients.includes('cebolla caramelizada')).map(order => order.ordered)
    return orders
}    


// .reduce() <- Lo intenté, pero fallé. No entiendo bien como se utiliza.
// const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]

// const getBreadsAmount = () => sandwichOrders.reduce((acc, el) =>  {
//     const bread = acc + el.bread
//     let contador = 0
//     if (bread.includes('marraqueta')) {
//         contador++
//     }
//     return contador
// })