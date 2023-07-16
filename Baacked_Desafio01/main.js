class ProductManager {
    constructor(){
        this.products = []
        this.id = 0
    }

    getProducts(){
        let products = this.products
        return console.log(products)
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title && description && price && thumbnail && code && stock){
            const existCode = this.products.some(product => product.code === code)
            if(existCode){
                throw Error('El producto con ese código ya existe')
            }
            else{
                this.products.push({ id: ++this.id, title, description, price, thumbnail, code, stock})
            }
        }
        else{
            throw Error('Faltan campos que completar')
        }
    }

    getProductById(id){
        const existID = this.products.find(p => p.id == id)
        if(existID){
            console.log('El producto con ese ID es: ', existID)
        }
        else{
            throw Error('Not found')
        }
    }
}

const items = new ProductManager();

items.addProduct(
    'Rey Leon', 
    'Pelicula infantil de animales',
    250,
    'thumbnail',
    'asd', 
    5);

items.addProduct(
    'Tarzan', 
    'Pelicula infantil de la selva',
    350,
    'thumbnail',
    'asda',
    10);

items.getProductById(2)
