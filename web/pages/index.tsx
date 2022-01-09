import { Grid } from "@mui/material";
import type { NextPage } from "next";
import ProductCard from "../components/ProductCard";

// TODO: Replace with data from server when there is an endpoint
const MOCK_DATA = [
  {
    title: 'Молоко "Домик в деревне"',
    image: "http://www.utkonos.ru/images/photo/3306/3306724_1H.jpg",
    averagePrice: 100,
    updateDate: new Date(2022, 0, 1, 0, 0, 0, 0),
  },
  {
    title: "Хлеб ржаной",
    image:
      "https://replyua.net/uploads/posts/2019-10/medium/1572514784_1548915541_hleb_litovski_tmin.jpg",
    averagePrice: 50,
    updateDate: new Date(2022, 0, 1, 0, 0, 0, 0),
  },
  {
    title: 'Квас "Очаковский" в банке',
    image: "http://www.utkonos.ru/images/photo/3049/3049552H.jpg",
    averagePrice: 50,
    updateDate: new Date(2022, 0, 1, 0, 0, 0, 0),
  },
  {
    title: "Батон",
    image:
      "https://kartinkin.net/uploads/posts/2021-07/thumbs/1626779995_36-kartinkin-com-p-baton-khleba-yeda-krasivo-foto-39.jpg",
    averagePrice: 50,
    updateDate: new Date(2022, 0, 1, 0, 0, 0, 0),
  },
  {
    title: 'Молоко "Домик в деревне"',
    image: "http://www.utkonos.ru/images/photo/3306/3306724_1H.jpg",
    averagePrice: 100,
    updateDate: new Date(2022, 0, 1, 0, 0, 0, 0),
  },
  {
    title: 'Квас "Очаковский" в банке',
    image: "http://www.utkonos.ru/images/photo/3049/3049552H.jpg",
    averagePrice: 50,
    updateDate: new Date(2022, 0, 1, 0, 0, 0, 0),
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Grid container gap={1} justifyContent="center">
        {MOCK_DATA.map((item) => (
          <ProductCard
            title={item.title}
            image={item.image}
            key={item.title}
            averagePrice={item.averagePrice}
            updateDate={item.updateDate}
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;
