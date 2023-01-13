import { Router, useRouter } from "next/router";
import { Button} from '@chakra-ui/react';

const Dynamic_routes = () => {
    const router = useRouter()
    const { Dynamic } = router.query
    
    return (<>
    <h2>This is {Dynamic} page</h2>
    <h2>Post: {Dynamic}</h2>

    <Button colorScheme='blue' variant='solid' onClick={() => router.push('/')}>Go Back To Home Page</Button>
    </>)
}

export default Dynamic_routes