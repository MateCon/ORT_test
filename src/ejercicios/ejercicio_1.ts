// De la lista 11, 33, 2, -1, 110, 99, 8 obtener el segundo mayor impar

const f = (list: number[]) => list.filter((a) => a % 2 !== 0).sort((a, b) => a > b ? -1 : 1)[1];

// f([11, 33, 2, -1, 110, 99, 8]);