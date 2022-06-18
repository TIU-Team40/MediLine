export function CheckItem(itemsInCart, productId) {
  if (itemsInCart.length === 0) return false;
  const itemPresent = itemsInCart.find(
    (item) => item.medicine._id === productId
  );
  return itemPresent ? true : false;
}

export function CurrentShop(itemsInCart, productId, pharmacyId) {
  if (itemsInCart.length === 0) return false;
  const itemPresent = itemsInCart.find(
    (item) => item.medicine._id === productId
  );

  return itemPresent.pharmacy._id === pharmacyId ? true : false;
}

export function SamePharmacy(itemsInCart) {
  const pharmacyId = itemsInCart[0].pharmacy._id;
  for (let i = 1; i < itemsInCart.length; i++) {
    if (itemsInCart[i].pharmacy._id !== pharmacyId) {
      return false;
    }
  }
  return true;
}
