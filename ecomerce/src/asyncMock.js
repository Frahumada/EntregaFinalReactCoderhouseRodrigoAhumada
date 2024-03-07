const products = [
    {
      id: "1",
      name: "Harry Potter 1",
      price: 1000,
      category: "libro",
      img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
      stock: 2,
      description: "Descripcion de HP1",
    },
    {
      id: "2",
      name: "Harry Potter 2",
      price: 2500,
      category: "libro",
      img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
      stock: 25,
      description: "Descripcion de HP2",
    },
    {
      id: "3",
      name: "Harry Potter 3",
      price: 3000,
      category: "pelicula",
      img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
      stock: 15,
      description: "Descripcion de HP3",
    },
    {
      id: "4",
      name: "Harry Potter musical",
      price: 500,
      category: "musica",
      img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
      stock: 5,
      description: "Descripcion de HPMusical",
    },
];
  
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productoId));
      }, 1000);
    });
  };
