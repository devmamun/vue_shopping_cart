<template>
    <div class="d-flex cart-outer-div">
        <Header></Header>
        <div class="cart-body">
            <div v-if="totalPrice !== 0" class="container mb-5">
               <h4 class="my-4 my-cart">My Cart</h4>
               <div class="d-flex my-3" style="justify-content:space-between">
                   <h4 class="fw-600">Summary</h4>
                   <h4 class="fw-600" style="margin-right: 49%">Cart</h4>
               </div>
               <div class="d-flex">
                    <Summary :totalPrice="totalPrice" />
                    <div class="row" style="width : 50%;">
                        <div style="max-width : 70%" class="col-md-12">
                            <ul style="padding : 0">
                                <li v-for="items in cartItems" :key="items.id" style="list-style: none;">
                                    <div class="cart-items">
                                        <img :src="items.url" width="50px" style="border-radius: 50%">
                                        <h6 mt-15> {{ items.name }} </h6>
                                        <div class="f-flex mt-10">
                                            <button @click="removeItem(items)" class="add" type="button">-</button>
                                            <span class="cart-quantity"> {{ items.quantity }} </span>
                                            <button @click="addItem(items)" class="remove" type="button">+</button>
                                        </div>
                                        <h6 class="mt-15"> {{ items.price * items.quantity }} </h6>
                                    </div>
                                    <div class="line"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>
               <div class="d-flex justify-content-end" style="width : 80%; margin-top: 2%">
                   <button @click="checkout" class="btn btn-primary" type="button">Checkout</button>
               </div>
            </div>
            <EmptyCart v-else />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
import EmptyCart from './EmptyCart.vue'
import Summary from './Summary.vue'
import swal from 'sweetalert'
export default {
    name : "Cart",
    components:{
        Header,
        Footer,
        EmptyCart,
        Summary
    },
    methods: {
        addItem(items){
            this.$store.dispatch('addToCart',items)
        },
        removeItem(items){
            this.$store.dispatch('removeItem',items)
        },
        checkout(){
            swal("Good job!", "Your order is placced successfully!", "success")
            .then(function() {
                window.location.reload();
            })
        }
    },
    computed: {
        cartItems(){
            return this.$store.state.cartItems;
        },
        totalPrice(){
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el['quantity'] *  el['price'];
            })
            return price;
        }

    },
}
</script>

<style scoped>
.cart-outer-div{
    flex-direction: column;
    height : 100vh;
}
.cart-body{
    background : #efe9e2;
    flex : 1;
    overflow-y: auto;
}
.cart-quantity{
    display : inline-block;
    padding : 3px 6px;
    width : 46px;
    height : 28px;
    border-radius: 2px;
    background : #fff;
    margin : 0 5px;
    text-align: center;
}
.cart-items{
    display: flex;
    justify-content: space-between;
    padding : 10px;
    background : white;
}
.my-cart{
    color : orange;
    font-weight: 600;
}
input[type="text"]{
    border: none;
    width : 100%;
    font-size : 14px;
    font-weight: 500;
    vertical-align: middle;
    text-align: center;
    outline : none;
}
.fw-600{
    font-weight: 600;
}
.line{
    height : 1px;
    border-bottom : 1px solid #000;
}
.w-120{
    width : 120%;
}
.w-60{
    width : 60%;
}
.add, .remove{
    width : 28px;
    height : 28px;
    background : linear-gradient(#fff, #f9f9f9);
    border : 1px solid #c2c2c2;
    cursor: pointer;
    font-size : 16px;
    border-radius: 7px;
    padding-top : 1px;
    outline : none;
}
.mt-10{
    margin-top : 10px;
}
.mt-15{
    margin-top : 15px
}
.orange-red{
    color: orangered;
}
.darkblue{
    color : darkblue;
}

</style>