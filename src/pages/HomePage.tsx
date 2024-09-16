import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValue: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValue.searchQuery}`,
        });
    };

    return (
        <div className="flex flex-col gap-12">
            {/* adjust the px and mx values below */}
            <div className="md:px-20 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 md:mx-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takeaway today
                </h1>
                <span className="text-xl">Food is just a click away!</span>
                <SearchBar
                    placeHolder="Search by City or Town"
                    onSubmit={handleSearchSubmit}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} alt="landing img" />
                <div className="flex flex-col item-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tight">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download MernEats App for faster ordering and
                        personalised recommendations
                    </span>
                    <img
                        src={appDownloadImage}
                        className='w-full max-w-xs mx-auto h-auto"'
                        alt="App Download Img"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
