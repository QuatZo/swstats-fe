import Error from '../components/Error';

export default function Error404(){
    return (
        <div>
            <Error title={"404"} msg={"Page not found"} pageNotFound />
        </div>
    )
}