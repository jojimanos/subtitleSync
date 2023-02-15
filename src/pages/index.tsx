import { Inter } from "@next/font/google";
import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebaseConfig";
import { User } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Navbar />
      <Flex color="white" direction="column" alignItems="center">
        {(user && (
          <>
            <Flex
              alignItems="center"
              justifyContent="center"
              width="full"
              height={300}
            >
              <Text>Subtitle Sync</Text>
            </Flex>
            <Flex maxWidth={400} alignItems="center" direction="column">
              <Input placeholder="video url" mb={3} onChange={() => {}} />
              <Input placeholder="subtitles" mb={3} onChange={() => {}} />
              <Button variant="outline">Synchronise</Button>
            </Flex>
          </>
        )) || (
          <Flex
            alignItems="center"
            justifyContent="center"
            width="full"
            height={300}
          >
            <Image src="/images/movie.png" alt="" width={150} height={150} />
          </Flex>
        )}
      </Flex>
    </>
  );
}
