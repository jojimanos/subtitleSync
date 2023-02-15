import { AuthModalState } from "@/atoms/AuhtModalAtom";
import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { constSelector, useSetRecoilState } from "recoil";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../../firebase/firebaseConfig";

const Signup: React.FC = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(formState.email, formState.password);
    setAuthModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <form onSubmit={onSubmit}>
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input
              required
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
              required
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
          <Button colorScheme="blue" mr={3} type="submit" isLoading={loading}>
            SIGN UP
          </Button>
          <Text mr={1}>Already registered?</Text>
          <Text
            color="red.500"
            fontWeight={700}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({ ...prev, view: "login" }))
            }
          >
            LOGIN
          </Text>
        </ModalFooter>
      </ModalContent>{" "}
    </form>
  );
};

export default Signup;
