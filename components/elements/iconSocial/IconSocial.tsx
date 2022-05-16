export interface ISocial {
  id?: string;
  name: string;
  url: string;
  icon: any;
}

const IconSocial: React.FC<ISocial> = (item) => {
  return <a key={item.name} href={item.url} target='_blank' className="text-gray-400 hover:text-gray-500">
    <span className="sr-only">{item.name}</span>
    <item.icon className="h-6 w-6" aria-hidden="true" />
  </a>
};

export default IconSocial;
