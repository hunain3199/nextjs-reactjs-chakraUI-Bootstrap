import { Router, useRouter } from "next/router";
import { Button} from '@chakra-ui/react';

const dynamic_routes = () => {
    const router = useRouter()
    const { dynamic } = router.query
    
    return (<>
    <h2>This is {dynamic} page</h2>
    <h2>Post: {dynamic}</h2>

    <Button colorScheme='blue' variant='solid' onClick={() => router.push('/')}>Go Back To Home Page</Button>
    </>)
}

export default dynamic_routes