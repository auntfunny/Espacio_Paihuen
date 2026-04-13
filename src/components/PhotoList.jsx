import PhotoCard from "./PhotoCard";

const PhotoList = ({ images }) => {
    return (
        <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full md:w-2/3 place-content-center gap-4 p-4">
            {images.map((image, index) => (
                <PhotoCard key={index} image={image} />
            ))}
        </article>
    );
}

export default PhotoList;
