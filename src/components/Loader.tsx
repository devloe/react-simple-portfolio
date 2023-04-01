import { Spinner } from '@chakra-ui/react'

export default function Loader() {
    return <Spinner className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></Spinner>;
}