import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
    return (
        <div className="loader-container">
            <HashLoader color={'#00143d'} loading={true} size={150} />
            <div className="loading-text">Searching Previous Projects</div>
        </div>
    );
};

export default Loader;