import ImgDisplayProps from './type';

function ImgDisplay(imgDisplayProps: ImgDisplayProps) {
    const { eateryImages } = imgDisplayProps;
    return (
        <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg" src={eateryImages[0].imgUrl} alt="tr" />
            <img className="rounded-lg" src={eateryImages[1].imgUrl} alt="tr" />
        </div>
    );
}

export default ImgDisplay;
