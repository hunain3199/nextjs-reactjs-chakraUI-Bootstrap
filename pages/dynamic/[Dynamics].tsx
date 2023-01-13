import { Router, useRouter } from "next/router";
import { Button} from '@chakra-ui/react';

const Dynamic_routes = () => {
    const router = useRouter()
    const { Dynamics } = router.query
    
    return (<>
    <h2>This is {Dynamics} page</h2>
    <h2>Post: {Dynamics}</h2>

    <Button colorScheme='blue' variant='solid' onClick={() => router.push('/')}>Go Back To Home Page</Button>
    </>)
}

export default Dynamic_routes