import Details from "../../components/details.component/detailsComponent";
import Header from "../../components/header.component/header";
import Footer from "../../components/footer.component/footer";
import SimilarDestinations from "../../components/similar.destinations.component/similarDestinations";

/**
 * The DetailsPage function returns a JSX element that includes a Header, Details, SimilarDestinations,
 * and Footer component.
 * @returns The DetailsPage component is being returned, which includes the Header, Details,
 * SimilarDestinations, and Footer components.
 */
const DetailsPage = () => {
    return (
        <>
            <Header />
            <Details />
            <SimilarDestinations />
            <Footer />
        </>
    );
}

export default DetailsPage;