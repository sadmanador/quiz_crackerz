import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to='/'>Quizzes Mania</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/">Quizzes</NavLink>
                        <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/statistics">Statistics</NavLink>
                        <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/blogs">Blogs</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;