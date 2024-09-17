// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Badge,
// } from "@mui/material";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   try {
//     const response = axios.get(`/data/products/`);
//     setProducts(response.data);
//     console.log(response.data);
//   } catch (err) {
//     console.error("Error initializing app:", err);
//   }

//   useEffect(() => {
// Получение списка продуктов
//     axios
//       .get("/data/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

// Добавление продукта в корзину
//   const addToCart = (product) => {
//     if (!cart.some((item) => item.id === product.id)) {
//       setCart([...cart, product]);
//     }
//   };

// Удаление продукта из корзины
//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

// Подсчет общей суммы
//   useEffect(() => {
//     const sum = cart.reduce((acc, item) => acc + item.price, 0);
//     setTotal(sum);
//   }, [cart]);

//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Все кроссовки
//       </Typography>
//       <Grid container spacing={4}>
//         {products.map((product) => (
//           <Grid item key={product.id} xs={12} sm={6} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{product.name}</Typography>
//                 <Typography variant="body2">
//                   Цена: {product.price} руб.
//                 </Typography>
//                 {cart.some((item) => item.id === product.id) ? (
//                   <Button variant="contained" color="success" disabled>
//                     ✓ В корзине
//                   </Button>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => addToCart(product)}
//                   >
//                     + Добавить в корзину
//                   </Button>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

{
  /* Корзина */
}
//   <div style={{ marginTop: "40px", position: "relative" }}>
//     <Typography variant="h5">Корзина</Typography>
//     {cart.length === 0 ? (
//       <Typography variant="body1">Корзина пуста</Typography>
//     ) : (
//       <>
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "10px",
//             }}
//           >
//             <Typography>{item.name}</Typography>
//             <Typography>{item.price} руб.</Typography>
//             <Button
//               color="secondary"
//               onClick={() => removeFromCart(item.id)}
//             >
//               Удалить
//             </Button>
//           </div>
//             ))}
//             <Typography variant="h6">Итого: {total} руб.</Typography>
//             <Typography variant="h6">Налог 5%: {total * 0.05} руб.</Typography>
//             <Typography variant="h6">
//               Общая сумма: {total + total * 0.05} руб.
//             </Typography>
//             <Button
//               variant="contained"
//               color="success"
//               style={{ marginTop: "10px" }}
//             >
//               Оформить заказ
//             </Button>
//           </>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Products;
import React from "react";

function Products() {
  return <div></div>;
}

export default Products;
