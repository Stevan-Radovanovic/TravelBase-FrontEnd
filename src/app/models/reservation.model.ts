export interface Reservation {
    broj_noci: number;
    datum: Date;
    id_aranzmana?: number;
    id_korisnika?: number;
    id_rezervacije?: number;
    naziv_aranzmana?: string;
    odjava: Date;
    prijava: Date;
}