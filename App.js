import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute'; // Pastikan Anda sudah membuat komponen ini
import Photos from './routes/Photos'; // Pastikan Anda sudah membuat komponen ini
import CreatePhoto from './routes/CreatePhoto'; // Pastikan Anda sudah membuat komponen ini
import Detail from './routes/Detail'; // Pastikan Anda sudah membuat komponen ini
import SignIn from './routes/SignIn'; // Pastikan Anda sudah membuat komponen ini
import Register from './routes/Register'; // Pastikan Anda sudah membuat komponen ini
import NotFound from './routes/NotFound'; // Pastikan Anda sudah membuat komponen ini

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route index element={<Photos />} />
                    <Route path="create" element={<CreatePhoto />} />
                    <Route path="photo/:id" element={<Detail />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;