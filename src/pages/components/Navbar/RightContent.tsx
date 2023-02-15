import { AuthModalState } from "@/atoms/AuhtModalAtom";
import { Button, Flex } from "@chakra-ui/react";
import { auth } from "../../../../firebase/firebaseConfig";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import AuthModal from "./AuthModules/AuthModal";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const setModalState = useSetRecoilState(AuthModalState);
  const [user, loading, error] = useAuthState(auth);
  const [signOut, exitLoading, exitError] = useSignOut(auth);

  const Logout = () => {
    signOut();
  };

  return (
    <>
      <AuthModal />
      {(user && (
        <Flex>
          <Button mr={2} variant="outline" onClick={Logout}>
            Logout
          </Button>
        </Flex>
      )) || (
        <Flex flexGrow={1} maxWidth={300} justify="center" align="center">
          <Button
            mr={2}
            variant="outline"
            onClick={() => setModalState({ open: true, view: "login" })}
          >
            Login
          </Button>
          <Button
            mr={2}
            variant="outline"
            onClick={() => setModalState({ open: true, view: "signup" })}
          >
            REGISTER
          </Button>
        </Flex>
      )}
    </>
  );
};

export default RightContent;
