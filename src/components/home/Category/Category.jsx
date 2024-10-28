import React, { useEffect, useState } from "react";
import "./Category.scss";
import { Button, CardActionArea, Container, Grid, Stack } from "@mui/material";
import { countProductByCategory } from "../../../utils/appService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.data.categories);
  const products = useSelector((state) => state.data.products);
  const [category, setCategories] = useState([]);
  async function fetchCategories() {
    try {
      const response = await axios.get("API_URL", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) setCategories(response.data);
    } catch (error) {
      console.log(error?.message);
    }
  }
console.log(categories);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container className="category" maxWidth="lg">
      <Stack className="stack1">
        <Stack className="name" direction={"row"}>
          <p className="h2 medium">Category</p>
          <Button
            variant="outlined"
            onClick={() => navigate("/categories")}
          >
            <p className="normal h7 medium indigo">View All</p>
          </Button>
        </Stack>
      </Stack>
      <Stack className="stack2 mg10">
        <Grid container spacing={2}>
          {
            categories.map((category) => {
              return (
                <Grid item xs={2}>
                  <CardActionArea
                    key={category?._id}
                    onClick={() =>
                      navigate(`products?category=${category?._id}`)
                    }
                    className="flex-center"
                  >
                    <Stack className="stack3 " spacing={3}>
                      <img width={50} src={category?.icon} alt={category?.name} />

                      <Stack className="namecnt" spacing={1}>
                        <p className="name ">{category?.name}</p>
                        <p className="content ">
                          {countProductByCategory(products, category?._id)} items
                        </p>
                      </Stack>
                    </Stack>
                  </CardActionArea>
                </Grid>
              );
            })
          }
        </Grid>
      </Stack>
    </Container>
  );
};

export default Category;
