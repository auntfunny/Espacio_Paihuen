import PhotoCard from "./PhotoCard";

const PhotoList = ({ images, setactivePhoto }) => {
    return (
        <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-content-center gap-4 p-4">
            {images.map((image, index) => (
                <PhotoCard key={index} image={image} setactivePhoto={setactivePhoto} />
            ))}
        </article>
    );
}

export default PhotoList;
