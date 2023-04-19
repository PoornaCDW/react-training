import Header from "../../components/header.component/header";
import Explorer from "../../components/explorer.component/explorer";
import Destinations from "../../components/destinations.component/destinations";
import Footer from "../../components/footer.component/footer";

/**
 * The HomePage function returns a JSX element that includes a Header, Explorer, Destinations, and
 * Footer component.
 * @returns The `HomePage` component is being returned, which is a combination of several other
 * components including `Header`, `Explorer`, `Destinations`, and `Footer`.
 */
const HomePage = () => {
    return (
        <>
            <Header />
            <Explorer />
            <Destinations />
            <Footer />
        </>
    );
}

export default HomePage;