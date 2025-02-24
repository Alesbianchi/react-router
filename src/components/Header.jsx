import Navbar from "./Navbar.jsx";

// Header.jsx
export default function Header() {
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'About', url: '/about', current: false },
        { id: 3, text: 'Contacts', url: '/contacts', current: false },
    ];
    return (
        <header className="container">

            < Navbar />

        </header>

    );
}
