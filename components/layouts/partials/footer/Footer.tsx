
export interface IFooter {}

const Footer: React.FC<IFooter> = ({ ...props }) => {
  return <footer {...props}></footer>
};

export default Footer;
