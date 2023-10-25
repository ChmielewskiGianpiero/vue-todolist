const { createApp } = Vue;

createApp({
    data() {
        return {
            title : "Vue To Do List",
            currentIndex : 0,
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            newTodo: ""
        }
    },
    methods: {
        addLine (index) {
            if (this.todos[index].done ===  true) {
                return "task-completed"
            } else {
                return ""
            }
        },

        addTodo (){
            const newTodo = {
                text: this.newTodo,
                done: false
            }
            this.todos.unshift(newTodo)
            
            this.newTodo = "";
        },

        removeTodo(index){
            this.todos.splice(index , 1)
        }

        
    }
}).mount('#app');


// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.