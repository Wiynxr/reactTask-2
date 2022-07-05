import Copyright from "./Copyright";
import FooterMenu from "./FooterMenu";
import FooterLogo from "./FooterLogo";

const Footer = () => {
    return (
        <div className="Footer">
            <FooterLogo />
            <FooterMenu />
            <Copyright />
        </div>
    )
}


export default Footer;