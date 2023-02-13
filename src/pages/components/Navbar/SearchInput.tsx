import { Input, Flex } from "@chakra-ui/react";

const SearchInput = () => {
    return (
        <Flex alignItems="center">
        <Input mr={3} maxWidth={400}/>
        </Flex>
    )
};

export default SearchInput;