// Task – Trieda reprezentujúca úlohu.
//     Atributy:
// id (unikátny identifikátor)
// title (názov úlohy)
// description (popis úlohy)
// is_completed (boolean hodnota určujúca, či je úloha vykonaná alebo nie)
// Metódy:
//     mark_as_done() – označí úlohu ako dokončenú.
// __str__() – vráti reprezentáciu úlohy vo formáte: "ID: {id}, Názov: {title},
// Stav: {'Dokončené' if is_completed else 'Neukončené'}"

class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }

    markAsDone() {
        this.isCompleted = true;
    }

    __str__() {
        this.isCompleted
            ?
            console.log(`ID: ${this.id + 1}, Názov: ${this.title}, Stav: Dokončené`)
            :
            console.log(`ID: ${this.id + 1}, Názov: ${this.title}, Stav: Nedokončené`);
    }
}

module.exports = Task;