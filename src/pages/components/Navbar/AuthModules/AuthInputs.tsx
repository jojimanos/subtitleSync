import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { AuthModalState } from "@/atoms/AuhtModalAtom";
import LogIn from "./Login";
import Signup from "./Signup";

const AuthInputs: React.FC = () => {
  const modalState = useRecoilValue(AuthModalState);

  return (
    <Flex>
      {modalState.view === "login" && <LogIn />}
      {modalState.view === "signup" && <Signup />}
    </Flex>
  );
};

export default AuthInputs;
