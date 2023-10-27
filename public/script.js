Vue.createApp({
    data() {
        return {
            message: "",
            total: 1,
            products: [
                { id: 1, title: "Product A", price: 3},
                { id :2, title: "Product B", price: 4.99},
                { id: 3, title: "Product C", price: 2.99}
            ],
            cart : []
        };
    },
    methods: {
        addtoCart(product){
            this.total += product.price;
            this.cart.push(
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1
                }
            );
        }
    }
}).mount("#app");
setTimeout(() => {
    app.message = "Hello"
    console.log(app.message);
}, 2000);