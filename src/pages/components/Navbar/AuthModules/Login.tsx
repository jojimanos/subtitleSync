import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/atoms/AuhtModalAtom";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../../firebase/firebaseConfig";

const LogIn: React.FC = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const setAuthModalState = useSetRecoilState(AuthModalState);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(formState.email, formState.password);
    setAuthModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <form onSubmit={onSubmit}>
      <ModalContent>
        <ModalHeader>Login to your Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }))
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }))
              }
            />
          </FormControl>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button type="submit" colorScheme="blue" mr={3}>
            LOGIN
          </Button>
          <Text mr={1}>Not a user?</Text>
          <Text
            color="red.500"
            fontWeight={700}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({ ...prev, view: "signup" }))
            }
          >
            SIGN UP
          </Text>
        </ModalFooter>
      </ModalContent>{" "}
    </form>
  );
};

export default LogIn;
