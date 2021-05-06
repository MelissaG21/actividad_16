//Programaci[on reactiva con Vue

const app = Vue.createApp({
    data (){
        return{
            materia: "Paradigmas de programacion",
            semestre: "sexto factorial",
            carrera: "Ciencias de la comutacion",
            productos: [
                {nombre: "cerveza", cantidad: 100},
                {nombre: "vino", cantidad: 10},
                {nombre: "agua", cantidad: 50}
            ],
            producto: ""
        }
    },

    methods: {
        agregarProducto(){
            this.productos.push(
                {nombre: this.producto, cantidad: 0}
            )
            this.producto="";
        }
    },

    computed: {
        total(){
            let total= 0
            for(producto of this.productos){
                total = total + producto.cantidad
            }
            return total;
            //return this.productos.reduce((contador, product) => contador + product.cantidad, 0)
        }
    }
})

const vm = app.mount('#app')