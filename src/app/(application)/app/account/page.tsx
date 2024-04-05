import Heading from "@/components/heading";
import StyleBlock from "@/components/style-block";

export default function Page() {
  return (
    <main>
      <Heading className="my-10">Your Account</Heading>
      <StyleBlock className="flex h-[350px] items-center justify-center md:h-[500px]">
        <h3>Logged in as ...</h3>
      </StyleBlock>
    </main>
  );
}
