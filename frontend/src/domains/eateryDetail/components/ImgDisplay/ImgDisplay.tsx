import ImgDisplayProps from './type';

function ImgDisplay(imgDisplayProps: ImgDisplayProps) {
    const { storeImages } = imgDisplayProps;
    return (
        <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg" src={storeImages[0].imgUrl} alt="tr" />
            <img className="rounded-lg" src={storeImages[1].imgUrl} alt="tr" />
        </div>
    );
}

export default ImgDisplay;
