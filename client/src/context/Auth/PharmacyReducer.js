export function pharmacyReducer(acc, action) {
  switch (action.type) {
    case "ADD_TO_INVENTORY":
      return { ...acc, inventory: [...acc.inventory, action.payload] };

    case "REMOVE_FROM_INVENTORY":
      return {
        ...acc,
        inventory: acc.inventory.filter(
          (item) => item.medicine._id !== action.payload
        ),
      };

    case "UPDATE_INVENTORY":
      return {
        ...acc,
        inventory: acc.inventory.map((item) => {
          return item.medicine._id === action.payload.medicineId
            ? {
                ...item,
                price: action.payload.price,
                quantity: action.payload.quantity,
              }
            : item;
        }),
      };

    case "ADD_TO_ORDER":
      return { ...acc, orders: [...acc.orders, action.payload] };

    case "CREATE_PHARMACY_SESSION": {
      localStorage.setItem(
        "session",
        JSON.stringify({ userId: action.payload._id })
      );
      localStorage.setItem("type", JSON.stringify("pharmacy"));
      return {
        ...acc,
        pharmacyId: action.payload._id,
        type: "pharmacy",
        name: action.payload.name,
        email: action.payload.email,
        contactNo: action.payload.contactNo,
        address: action.payload.address,
        pinCode: action.payload.pinCode,
        ratings: action.payload.ratings,
        orders: action.payload.orders,
        inventory: action.payload.inventory,
        notification: action.payload.notification,
      };
    }

    case "START_PHARMACY_SESSION": {
      return {
        ...acc,
        pharmacyId: action.payload._id,
        type: "pharmacy",
        name: action.payload.name,
        email: action.payload.email,
        contactNo: action.payload.contactNo,
        address: action.payload.address,
        pinCode: action.payload.pinCode,
        ratings: action.payload.ratings,
        orders: action.payload.orders,
        inventory: action.payload.inventory,
        notification: action.payload.notification,
      };
    }

    case "END_PHARMACY_SESSION": {
      localStorage.setItem("session", JSON.stringify({ userId: null }));
      localStorage.setItem("type", "null");
      return {
        ...acc,
        pharmacyId: "",
        type: "",
        name: "",
        email: "",
        contactNo: "",
        address: "",
        pinCode: "",
        ratings: "",
        orders: [],
        inventory: [],
        notification: [],
      };
    }

    default:
      return { ...acc };
  }
}
