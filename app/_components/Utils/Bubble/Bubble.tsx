
type BubbleProps = {
  className?: string,
}

const Bubble = ({className}: BubbleProps) => {
  return (
    <div className={`${className} fixed -z-1 rounded-full blur-2xl`} />
  );
};

export default Bubble;
