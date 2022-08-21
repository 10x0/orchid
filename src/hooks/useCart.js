import { useContext, createContext, useState, useMemo } from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [cost, setCost] = useState(0);
  const [billItems, setItemsToBill] = useState([]);

  const values = useMemo(() => {
    return {
      cartItems,
      totalItems,
      billItems,
      cost,
      addToCart: (newItem) => {
        var temp = cartItems;
        const itemInCart = cartItems.findIndex(
          (item) => item.name === newItem.name
        );
        if (itemInCart === -1) {
          temp.push({ ...newItem, quantity: 1 });
        } else {
          temp[itemInCart].quantity += 1;
        }
        setTotalItems(totalItems + 1);
        setCost((initial) => initial + newItem.pricePerUnit);
        setCartItems([...temp]);
      },
      removeFromCart: (itemToRemove) => {
        setTotalItems(totalItems - 1);
        setCost((initial) => initial - itemToRemove.pricePerUnit);
        var temp = cartItems;
        const itemInCart = cartItems.findIndex(
          (item) => item.name === itemToRemove.name
        );
        if (temp[itemInCart].quantity == 1) {
          setCartItems(temp.filter((i) => i.name !== itemToRemove.name));
        } else {
          temp[itemInCart].quantity -= 1;
          setCartItems([...temp]);
        }
      },
      placeOrder: () => {
        setTotalItems(0);
        setCost(0);
        setItemsToBill(cartItems);
        setCartItems([]);
      },
      makePayment: () => {
        setItemsToBill([]);
      },
    };
  }, [cartItems, totalItems, cost, billItems]);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

function useCart() {
  return useContext(CartContext);
}

export { useCart, CartProvider };
