import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        This is POC by ~ Akash Pawar {" "}
       {" "}
  
      </p>
    </main>
  );
}
