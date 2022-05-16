import IconSocial, { ISocial } from "@/components/elements/iconSocial/IconSocial";

export interface ISocialOnly {
  textReserved: string
  socials: ISocial[]
}

const SocialOnly: React.FC<ISocialOnly> = ({textReserved, socials}) => {
  return <footer className="bg-white">
  <div className="mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
    <div className="flex justify-center space-x-6 md:order-2">
      {socials?.map((item) => (
        <IconSocial name={item.name} url={item.url} icon={item.icon} />
      ))}
    </div>
    <div className="mt-8 md:mt-0 md:order-1">
      <p className="text-center text-base text-gray-400">&copy; {textReserved}</p>
    </div>
  </div>
</footer>
};

export default SocialOnly;
