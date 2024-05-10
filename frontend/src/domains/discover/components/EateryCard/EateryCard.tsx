import { Link } from 'react-router-dom';
import EateryCardProps from './type';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../../../shadcn/ui/card';

function EateryCard(eateryCardProps: EateryCardProps) {
    const {
        storeName,
        storeDescription,
        storeScore,
        storeAdress,
        storeImage,
    } = eateryCardProps;
    return (
        <div className="p-1">
            <Link to="/">
                <Card className="flex">
                    <div className="basis-2/5">
                        <img className="rounded-lg h-full object-cover" src={storeImage} alt={storeName} />
                    </div>
                    <div className="basis-3/5">
                        <CardHeader>
                            <CardTitle className="text-3xl">{storeName}</CardTitle>
                            <CardDescription className="line-clamp-2">{storeDescription}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{storeAdress}</p>
                        </CardContent>
                        <CardFooter className="flex gap-3">
                            <p>Score</p>
                            <p>{storeScore}</p>
                        </CardFooter>
                    </div>
                </Card>
            </Link>
        </div>
    );
}

export default EateryCard;
