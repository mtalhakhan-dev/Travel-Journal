import marker from "../icons/marker.png";
import fuji from "../icons/fuji.jpg";
import sydney from "../icons/sydney.jpg";
import norway from "../icons/norway.jpg";
export default function Entry() {
    return (
        <>
            <section className="entry">
                <img className="fuji" src={fuji} alt="Mount Fuji" />
                <div className="content">
                    <div className="top">
                        <img src={marker} height="20px" alt="Location Marker" />
                        <h3>JAPAN</h3>
                        <a href="https://maps.app.goo.gl/8pvzS9CEaLh1H3Px8">View in Google Maps</a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380) feet.
                        Mount Fuji is the single most popular tourist site in Japand, for both Japanese and foreign tourists.
                    </p>
                </div>
            </section>

            <section className="entry">
                <img className="fuji" src={sydney} alt="Mount Fuji" />
                <div className="content">
                    <div className="top">
                        <img src={marker} height="20px" alt="Location Marker" />
                        <h3>AUSTRALIA</h3>
                        <a href="https://maps.app.goo.gl/LNFx7EspPQ3Xe4pa9">View in Google Maps</a>
                    </div>
                    <h1>Sydney Opera House</h1>
                    <h4>27 May, 2021 - 8 Jun, 2021</h4>
                    <p>The Sydney Opera House is a multi-venue performing arts centre
                        in Sydney. Located on the banks of the Sydney Harbour, it is often
                        regarded as one of the 20th century's most famous and distinctive
                        buildings
                    </p>
                </div>
            </section>

            <section className="entry">
                <img className="fuji" src={norway} alt="Mount Fuji" />
                <div className="content">
                    <div className="top">
                        <img src={marker} height="20px" alt="Location Marker" />
                        <h3>NORWAY</h3>
                        <a href="https://maps.app.goo.gl/PPnjPY9qYgBFzjih9">View in Google Maps</a>
                    </div>
                    <h1>Geirangerfjord</h1>
                    <h4>01 Oct, 2021 - 18 Nov, 2021</h4>
                    <p>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og
                        Romsdal county, Norway. It is located entirely in the Stranda
                        Municipality.
                    </p>
                </div>
            </section>
        </>
    );

}