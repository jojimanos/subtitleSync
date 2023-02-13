import { Flex } from "@chakra-ui/react";
import RightContent from './RightContent'
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <Flex color="white" flexGrow={1}>
            <Flex width="20" alignItems="center">Home</Flex>
                <SearchInput/>
                <RightContent/>
        </Flex>
    )
}

export default Navbar