// Clase que tiene lo parametros para hacer la simulacion
export class Simulacion {
    //Cliente
    ipclien: string;
    mssclien: number;
    datosclien: number;
    snclien: number;
    segperdclien: string;
    vcclien: number;
    //Servidor
    ipserv: string;
    mssserv: number;
    datosserv: number;
    snserv: number;
    segperdserv: string;
    vcserv: number;
    //General
    timeout: number;
    algort: number;
}