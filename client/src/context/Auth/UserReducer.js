export function userReducer(acc, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...acc, cart: [...acc.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...acc,
        cart: acc.cart.filter((item) => item.medicine._id !== action.payload),
      };

    case "EMPTY_CART":
      return { ...acc, cart: [] };

    case "ADD_TO_ADDRESS":
      return { ...acc, addresses: [...acc.addresses, action.payload] };

    case "EDIT_ADDRESS":
      const addresses = acc.addresses.filter(
        (item) => item._id.toString() !== action.payload.addressId
      );
      const updatedAddresses = [...addresses, action.payload.address];
      return { ...acc, addresses: updatedAddresses };

    case "DELETE_ADDRESS":
      return {
        ...acc,
        addresses: acc.addresses.filter(
          (address) => address._id !== action.payload
        ),
      };

    case "SET_PRIMARY_ADDRESS":
      const updatedAddress = acc.addresses.map((address) => {
        if (address.isPrimary) address.isPrimary = false;
        return address;
      });
      console.log(updatedAddress);
      const addressess = updatedAddress.map((address) => {
        if (address._id.toString() === action.payload) address.isPrimary = true;
        return address;
      });
      console.log(addressess);
      return {
        ...acc,
        addresses: addressess,
      };

    case "ADD_TO_ORDER":
      return { ...acc, orders: [...acc.orders, action.payload] };

    case "CANCEL_ORDER":
      return {
        ...acc,
        orders: acc.orders.filter((order) => order._id !== action.payload),
      };

    case "INC_QTY":
      return {
        ...acc,
        cart: acc.cart.map((item) => {
          return item.medicine._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case "DEC_QTY":
      return {
        ...acc,
        cart: acc.cart.map((item) => {
          return item.medicine._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
      };

    case "UPDATE_USER": {
      return {
        ...acc,
        name: action.payload.name,
        email: action.payload.email,
        contactNo: action.payload.contactNo,
      };
    }

    case "CREATE_USER_SESSION": {
      localStorage.setItem(
        "session",
        JSON.stringify({ userId: action.payload._id })
      );
      localStorage.setItem("type", JSON.stringify("user"));
      return {
        ...acc,
        userId: action.payload._id,
        type: "user",
        name: action.payload.name,
        email: action.payload.email,
        contactNo: action.payload.contactNo,
        addresses: action.payload.addresses,
        orders: action.payload.orders,
        cart: action.payload.cart,
        notification: action.payload.notification,
      };
    }

    case "START_USER_SESSION": {
      return {
        ...acc,
        userId: action.payload._id,
        type: "user",
        name: action.payload.name,
        email: action.payload.email,
        contactNo: action.payload.contactNo,
        addresses: action.payload.addresses,
        orders: action.payload.orders,
        cart: action.payload.cart,
        notification: action.payload.notification,
      };
    }

    case "END_USER_SESSION": {
      localStorage.setItem("session", JSON.stringify({ userId: null }));
      localStorage.setItem("type", "null");
      return {
        ...acc,
        userId: "",
        type: "",
        name: "",
        email: "",
        contactNo: "",
        addresses: [],
        orders: [],
        cart: [],
        notification: [],
      };
    }

    case "LOAD_PRODUCTS":
      return { ...acc, productList: action.payload };

    case "TOGGLE_ADDRESS_MODAL":
      return { ...acc, showAddressModal: action.payload };

    case "ADDRESS_TO_EDIT":
      return { ...acc, addressToEdit: action.payload };

    case "USER_PROFILE_TAB":
      return { ...acc, userProfileTab: action.payload };

    default:
      return { ...acc };
  }
}
