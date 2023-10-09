import Link from "next/link";

const Footer = () => {
    return(
    <div className="footer">
        <div className="links">
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/Team">Team</Link></li>
            </ul>
        </div>
    </div>
)
}

export default Footer;