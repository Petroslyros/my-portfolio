import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "@/components/layout/Layout.tsx";
import HomePage from "@/components/pages/HomePage.tsx";

import {Toaster} from "sonner";

function App() {
    return (
        <>
            <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/my-portfolio' : '/'}>
                <Routes>
                    <Route element={<Layout />}>
                        {/* Portfolio Routes */}
                        <Route index element={<HomePage />}/>

                        {/* Commented out for later */}
                        {/*<Route path="login" element={<LoginPage />}/>*/}
                        {/*<Route path="products" element={<ProtectedRoute />}>*/}
                        {/*    <Route index element={<ProductsPage/>}/>*/}
                        {/*    <Route path=":productId" element={<ProductPage/>}/>*/}
                        {/*    <Route path="new" element={<ProductPage/>}/>*/}
                        {/*</Route>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster richColors />
        </>
    )
}

export default App