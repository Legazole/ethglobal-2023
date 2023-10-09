import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Link href="/">MEV-Safe</Link>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <Link href="/lps">LPs Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/vault">Vault</Link>
                  </li>
                  <li>
                    <Link href="/capital">Capital Dashboard</Link>
                  </li>
                  <li><button>Connect</button></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      );
}

export default Header;