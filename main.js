// classe de abstração
function GrupoMusical(nome, local, numeroMembros, tipoMusica) {
    this.nome = nome;
    this.local = local;
    this.numeroMembros = numeroMembros;
    this.tipoMusica = tipoMusica;
    this.ensaiar = function() {
        console.log('ensaiar');
    }
}

// classes herdeiras
function BandaDeRock(nome, local, numeroMembros, roadie) {
    this.roadie = roadie;
    GrupoMusical.call(this, nome, local, numeroMembros, 'Rock');
}

function GrupoPop(nome, local, numeroMembros, coreografo) {
    this.coreografo = coreografo;
    GrupoMusical.call(this, nome, local, numeroMembros, 'Pop');
}

// instâncias
const blackpink = new GrupoPop('Blackpink', 'Coreia do SUl', 4, 'Shin Tzuk');

const boogarins = new BandaDeRock('Boogarins', 'Brasil', 4, 'Mágico Stu');

const tigercub = new BandaDeRock('Tigercub', 'Reino Unido', 3, 'Jimi St Patrick');

console.log(blackpink);
console.log(boogarins);
console.log(tigercub);