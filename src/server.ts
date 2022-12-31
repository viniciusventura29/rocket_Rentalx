import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

const app = express();

const port = 3000;

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(port, () => console.log(`It's running on port ${port}`));
