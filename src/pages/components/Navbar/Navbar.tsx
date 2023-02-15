import { Flex, Image } from "@chakra-ui/react";
import { auth } from "../../../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex color="white" flexGrow={1} padding="6px 12px">
      <Flex flexGrow={1} maxWidth={250} textAlign="center">
        <Image src="/images/movie.png" alt="" height={10} width={10} />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
