import React from 'react'
import alertify from 'alertifyjs';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';

const Cart = ({cartItems, onRemoveFromCart,onClearCart}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price,0);

  const itemCount=[];

  cartItems.forEach(item => {
    const isItemExist=itemCount.find(product=>product.name===item.name);

    if(isItemExist){
      isItemExist.count +=1;
    }else{
      itemCount.push({...item,count:1})
    }
  });

  const handleRemoveFromCart = (item) =>{
    onRemoveFromCart(item);
    alertify.error(`${item.name} sepetten çıkarıldı!`);
  }

  const handleClearCart = () => {
    onClearCart();
    alertify.error('Sepet boşaltıldı!');
  }

  return(
    <div>
    <h3 className='ms-2 mt-4 mb-4'>Sepet</h3>
      <ListGroup>
        {itemCount.map((item) =>(
          <ListGroupItem className='d-flex justify-content-between align-items-center' key={item.id}>
            <img src={`${item.image}`} width={"15%"} alt='bulunamadi'/> <div style={{color:"green",fontWeight:"bold",fontSize:"16px"}}>{item.price} ₺</div>
            <div>{item.count} Adet</div>
            <Button color='warning'
            onClick={()=> handleRemoveFromCart(item)}
            style={{float: 'right'}}
            className='btn btn-sm'>Kaldır
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h4 style={{color:"black"}} className='mt-5 ms-2 mb-4'>Toplam: {totalPrice}₺</h4>
      <Button className='ms-2' color='danger' onClick={()=>handleClearCart()}>Sepeti Boşalt</Button>
    </div>

  );
}
export default Cart;