# haus

npm install -g @angular/cli
npm install -g loopback-cli 

#client: 
angular 8
angular material 8
@harmowatch/openapi-generator-cli  OPENAPI v3 to angular 7 services oder ng-openapi-gen
@ngrx/store     angular state container redux flux pattern
WICHTIG!!! siehe github seite zu state containern!!!!

#server: 
loopback 4

#neuerstellen:
mkdir haus
cd haus
mkdir microcontroller
ng new client
lb4 server
cd client
ng add @angular/material
npm install ng-openapi-gen
npm install @ngrx/store 
npm install @ngrx/store-devtools

#neuanlegen testschematiken
https://material.angular.io/guide/schematics

# ideen für raspberry:
https://github.com/nebrius/raspi


#fonts
nidus sans
borg
elianto
exan-3
dual
halogen
phage
Cyberpunk Is Not Dead
megatron
swerve
Cyber Freight


#vscode plugins:
Angular 7 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
Angular v7 Snippets
Auto Rename Tag
Document This
EditorConfig for VS Code
Git History
JavaScript (ES6) code snippets
JSON to TS
Latest TypeScript and Javascript Grammar
Move TS - Move TypeScript files and update relative imports
Paste JSON as Code
Path Intellisense
christian-kohler.path-intellisense
refactorix
TODO Highlight
TSLint
VSCode simpler Icons with Angular


#Ziele:
    mapping:
        definieren von inputs mit namen etc.
        mapping von inputpins und outputspins des controllers

        input: Taster Schalter Dimmer etc.
        output: relais die schüzue schalten

        n inputs können mit n outputs kombiniert werden
    live status:
        welche inputs und outsputs haben welchen aktuelellen status

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



#Architektur:
    gesamte kummunikations über restful api
    frontend und microcontroller sind nur http clients
    backend über loopback stellt http server
    backend ist an db (mongo oder couchbase angeschlossen)


