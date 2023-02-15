import React from 'react';

class CartItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {

        const clothingItems = [
            {gender: 'UNISEX', name: 'Killua Hoodie', color: 'Powder Blue', size: 'L', img: '#' },
            {gender: 'WOMEN', name: 'Bulma Shirt', color: 'Beige', size: 'M', img: '#' },
            {gender: 'MALE', name: 'Chrollo Shirt', color: 'White', size: 'XL', img: '#' },
            {gender: 'MALE', name: 'Goku Shirt', color: 'Brown', size: 'L', img: '#' },
            {gender: 'UNISEX', name: 'Gon Hoodie', color: 'Burnt Orange', size: 'M', img: '#' },
        ];


        return (
            <div>
                {clothingItems.map((clothingItems, index) => {
                    const {gender, name, color, size, img} = clothingItems;
                    return (
                        <>
                        <div>
                            <img src={img} alt="#" />
                        </div>
                            <div className='ClothingItem'>
                                <h3>{gender}</h3>
                                <h2>{name}</h2>
                                <span>Color: {color}</span>
                                <span>Size: {size}</span>
                            </div>
                        </>
                    );
                })}
            </div>
        );
    }
};
export default CartItems;