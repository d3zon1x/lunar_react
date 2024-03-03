import './App.css'
import CategoryListPage from './assets/category/list/CategoryListPage.tsx';
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./containers/default/DefaultLayout.tsx";
import CategoryCreatePage from "./assets/category/create/CategoryCreatePage.tsx";
import CategoryEditPage from './assets/category/edit/CategoryEditPage.tsx';
import ProductListPage from './assets/product/list/ProductListPage.tsx';

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
                <Route index element={<CategoryListPage/>}/>
                <Route path={"category"}>
                    <Route path = "create" element={<CategoryCreatePage/>}/>
                    <Route path={"edit/:id"} element={<CategoryEditPage/>} />
                </Route>
                <Route path={"product"}>
                    <Route index element={<ProductListPage/>} />
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App