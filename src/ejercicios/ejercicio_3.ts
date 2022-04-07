// Duplicar el array anterior y aplicarle la function raiz a todos los elementos,

const f = (list: number[]) => 
    [...list, ...list]
        .filter(n => n >= 0)
        .map(n => ({
            original: n,
            modificado: Math.floor(Math.sqrt(n) * 100) / 100
        }));

// console.log(f([2, 3, 5, 12, 54, 6, -1, 0, 4, 23, 66, 7]));

export default f;
