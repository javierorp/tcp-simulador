// Clase que tiene lo parametros para hacer la simulacion
export class Simulacion {
    //Cliente
    ipclien: string;
    mssclien: number;
    datosclien: number;
    snclien: number;
    segperdclien: string;
    wclien: number;
    //Servidor
    ipserv: string;
    mssserv: number;
    datosserv: number;
    snserv: number;
    segperdserv: string;
    wserv: number;
    //General
    timeout: number;
    umbral: number;
    algort: string;
    cierre: string;
}