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

const roundDiv = (a: number, b: number) => Math.floor(a / b);

export const ej_1_v2 = (n: number, curr: number) =>
    n > curr
        ? roundDiv(n - curr, 4) -
          roundDiv(n - curr, 100) +
          roundDiv(n - curr, 400)
        : 0;

// console.log(ej_1(2050));
// console.log(ej_1_v2(2022 + 2050, 2022));
// console.log(ej_1_v2(2020, 2022));

export interface Carta {
    num: number;
    color: 'red' | 'black';
}

const colores: ('red' | 'black')[] = ['black', 'black', 'red', 'red'];

const generarMazo = (): Carta[] => {
    let mazo: Carta[] = [];
    for (let i = 1; i < 13; i++)
        for (let color of colores)
            mazo.push({ num: i, color });
    return mazo;
};

export const ej_2 = () => {
    const mazo: Carta[] = generarMazo();
    let count = 0;

    for (let carta of mazo)
        if (carta.num <= 10 && carta.num % 2 === 0 && carta.color === 'black')
            count++;

    return count;
};

// console.log(ej_2());

export const ej_3 = () => {
    const mazo: Carta[] = generarMazo();
    let count = 0;
    let sum = 0;

    for (let i = 0; i < 1000; i++) {
        const copy: Carta[] = [...mazo];
        for (let i = 0; i < 6; i++)
            copy.splice(Math.floor(Math.random() * mazo.length), 1);
        for (let card of copy) {
            if(card.num > 1 && card.num <= 10) {
                sum += card.num;
                count++;
            }
        }
    }

    return sum / count;
};

console.log(ej_3());
