import Tags from "./Tags";

type NextProps = {
  onClick?: unknown;
};

const Next = () => {
  return (
    <Tags id="next" dataTag="next" icon="devicon:nextjs">
      NextJS
    </Tags>
  );
};

export default Next;
