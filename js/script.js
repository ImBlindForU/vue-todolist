// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks:[
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Fare la valigia",
                    done: false,
                },
                {
                    text: "Fare la cena",
                    done: false,
                }
            ],
        }
    }
}).mount("#app")