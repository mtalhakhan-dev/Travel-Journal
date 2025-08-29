import logo from "../icons/globe.png";
export default function header() {
    return (
        <>
            <header className="header">
                <img src={logo} className="logo" alt="globe" />
                <h1>my travel journal.</h1>
            </header>
        </>
    );
}