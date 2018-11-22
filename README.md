# haus

npm install -g @angular/cli
npm install -g loopback-cli 


client: angular 7
angular material 7
@harmowatch/openapi-generator-cli  OPENAPI v3 to angular 7 services
@ngrx/store     angular state container redux flux pattern


server: loopback 4


################################################################################
Ziele:
    mapping:
        mapping von inputpins und outputspins des controllers

        input: Taster Schalter Dimmer etc.
        output: relais die schüzue schalten

        n inputs können mit n outputs kombiniert werden

    controlling:
        messung der leistung (live)
        logging der leistung
    
    timing:
        Zeitschaltung 
        einmalig
        täglich 
        wächendlich
        diverse intervalle

    force:
        manuelles setzen der eingänge und ausgänge
        fest => für immer
        mit zeitplan

    microcontroller
        definieren von input output und datenpins
        festlegen der funktionen im controller
        hauptkonfiguration bei änderung updaten aus dem backend heraus

    backend
        konfiguration erzeugen aus allen einstellungen 



Architektur:
    gesamte kummunikations über restful api
    frontend und microcontroller sind nur http clients
    backend über loopback stellt http server
    backend ist an db (mongo oder couchbase angeschlossen)


