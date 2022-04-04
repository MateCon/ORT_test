// De la lista 11, 33, 2, -1, 110, 99, 8 obtener el segundo mayor impar

const f = (list: number[]) => list.filter((a) => a % 2 !== 0).sort((a, b) => b - a)[1];

console.log(f([11, 33, 2, -1, 110, 99, 8]));