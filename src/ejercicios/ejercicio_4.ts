/* Ejercicios:
1) Calcula los años bisiestos que habra antes de 2150
2) Cuantas cartas con numero par y negras hay en una baraja de poker
3) eliminar 6 cartas de la baraja al azar y calcular en promedio 
(haciendo 1000 iteraciones) cuanto valen las cartas (con numero) que quedan.
*/

export const ej_1 = (n: number) => {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (i % 4 === 0 && (!(i % 100 === 0) || i % 400 === 0)) count++;
    }
    return count;
};

export const ej_1_v2 = (n: number) =>
    Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400);

// console.log(ej_1(2050));
// console.log(ej_1_v2(2050));

export interface Carta {
    num: number;
    color: 'red' | 'black';
}

const generarMazo = (): Carta[] => {
    let mazo: Carta[] = [];
    for (let i = 1; i < 13; i++) {
        mazo.push({ num: i, color: 'black' });
        mazo.push({ num: i, color: 'black' });
        mazo.push({ num: i, color: 'red' });
        mazo.push({ num: i, color: 'red' });
    }
    return mazo;
};

export const ej_2 = () => {
    const mazo: Carta[] = generarMazo();
    let count = 0;

    for (let carta of mazo) {
        if (carta.num <= 10 && carta.num % 2 === 0 && carta.color === 'black')
            count++;
    }

    return count;
};

// console.log(ej_2());

export const ej_3 = () => {
    const mazo: Carta[] = generarMazo();
    let sum = 0;

    for (let i = 0; i < 1000; i++) {
        const copy: Carta[] = [...mazo];
        for (let i = 0; i < 6; i++)
            copy.splice(Math.floor(Math.random() * mazo.length), 1);
        for (let card of copy) sum += card.num;
    }

    return sum / 52000;
};

// console.log(ej_3());
