// CRUD

// create
function addProduct(name, price, category, photo) {
    // const task = new Object(); // {}
    // task.content = content; // {content: "abc"}
    // task.date = date; // {content: "abc", date: "1.1.2010"}
    // task.time = time;
  
    // const task = new Object(); // {}
    // task.content = "abc"; // {content: "abc"}
    // task.date = "1.1.2010"; // {content: "abc", date: "1.1.2010"}
    // task.time = "18:00";
  
    // create a new JSON to represent the new task
    const product = {
      name,
      price,
      category,
      photo,
    };
  
    // functional programming, Alex'es style:
    // getTasks().push(task);
  
    const products = getProducts();
    products.push(product);
  
    saveProducts(products);
  }
  
  // save tasks array to the localStorage
  function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  // retrieve - get tasks as JSON object
  function getProducts() {
    const tasks = localStorage.getItem("products");
    if (products) {
      // DO NOT make unnecessary IO operations.
      // return JSON.parse(localStorage.getItem("tasks"));
      return JSON.parse(products);
    }
    return [];
  }
  