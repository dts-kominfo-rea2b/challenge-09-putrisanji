import "./App.css";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import Header from "./components/Header";
import Contact from "./components/Contact";
import contacts from "./data/contacts.json";

const App = () => {
    // Masukkan Header dan Contact ke dalam div App

    return (
        <div className="App">
            <Header />
            {contacts?.map((contact) => (
                <Contact data={contact} />
            ))}
        </div>
    );
};

export default App;
