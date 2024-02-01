export interface Coordenada {
    x: number;
    y: number;
}
export declare function distanciaEuclidiana(pontoA: Coordenada | undefined, pontoB: Coordenada | undefined): Number;
export declare function getPositionFromEvent(event: any): Coordenada | undefined;
