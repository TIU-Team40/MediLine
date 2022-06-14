export function CheckItem(itemsInCart, productId) {
    console.log(itemsInCart)
    if (itemsInCart.length === 0) return false;
    const itemPresent = itemsInCart.find(
      (item) => item.medicine._id === productId
    );
    return itemPresent ? true : false;
  }