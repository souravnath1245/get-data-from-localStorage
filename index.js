function submit(){
    const input = document.getElementById('input')
    const name = input.value;
    // display name in ui:
    displayName(name)
    // setData to localStorage: 
    addProductToCart(name)

    input.value = '';
  }
  const displayName = (name)=>{
      const showInput = document.getElementById("showInput");
      const li = document.createElement("li");
      li.innerHTML = name;
      showInput.appendChild(li);
  } 
  const getDb = () => {
      const shoppingCart = localStorage.getItem("cart");
      let cartObj;
      if (shoppingCart) {
        cartObj = JSON.parse(shoppingCart);
      } else {
        cartObj = {};
      }
      return cartObj;
    };
    const addProductToCart = (name) => {
      let cart = getDb();
      cart[name] ? (cart[name] = cart[name] + 1) : (cart[name] = 1);
      const cartString = JSON.stringify(cart);
      localStorage.setItem("cart", cartString);
    };
    const displayDataFormLocalStorage=()=>{
      const cart = getDb()
      for(let name in cart) displayName(name)
    }
    displayDataFormLocalStorage();