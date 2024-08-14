import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const NoResult = ({ title, description }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/light-illustration.png"
        alt="no result"
        width={270}
        height={200}
        className="block object-contain"
      />

      <h2 className="h2-bold text-dark-200 mt-8">{title}</h2>
      <p className="body-regular text-dark-500 my-3.5 max-w-md text-center">
        {description}
      </p>
    </div>
  );
};

export default NoResult;
