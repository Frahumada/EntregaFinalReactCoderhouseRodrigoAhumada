const products = [
    {
      id: "1",
      name: "Harry Potter 1",
      price: 1000,
      category: "libros",
      img: "https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg",
      stock: 2,
      description: "Descripcion de HP1",
    },
    {
      id: "2",
      name: "Harry Potter 2",
      price: 2500,
      category: "libros",
      img: "https://musicart.xboxlive.com/7/12d85000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      stock: 25,
      description: "Descripcion de HP2",
    },
    {
      id: "3",
      name: "Harry Potter 3",
      price: 3000,
      category: "peliculas",
      img: "https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg",
      stock: 15,
      description: "Descripcion de HP3",
    },
    {
      id: "4",
      name: "Harry Potter musical",
      price: 500,
      category: "musica",
      img: "https://i.ytimg.com/vi/h1Xm9ynJKDM/maxresdefault.jpg",
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
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category));
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