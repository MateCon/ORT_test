/* 
Dado un array 
multiplicar todos sus valores por el anterior 
menos el siguiente 
*/

export const f1 = (data: number[]) => {
    const new_data = [];
    for (let i = 0; i < data.length; i++) {
        const anterior = data[i - 1] || 0;
        const siguiente = data[i + 1] || 0;
        new_data.push(anterior * data[i] - siguiente);
    }
    return new_data;
};

export const f2 = (data: number[]) =>
    data.map((val, i) => {
        const anterior = data[i - 1] || 0;
        const siguiente = data[i + 1] || 0;
        return anterior * val - siguiente;
    });

const f3 = (data: number[]) =>
    data.map((val, i) => (data[i - 1] || 0) * val - (data[i + 1] || 0));

// console.log(f3([2, 3, 5, 12, 54, 6, -1, 0, 4, 23, 66, 7]));

export default f3;
