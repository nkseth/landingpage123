import { styles } from "./navbarstyles";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="navbar" style={styles.div}>
      <img
        src="http://u.filein.io/mhxnTJ7sQ9.svg"
        alt="logo"
        width="160"
        height="40"
      />
      <Link href="https://google.com" passHref>
        <div
          style={{
            padding: "10px 25px",
            backgroundColor: "#ffffff",
            fontWeight: "bold",
            borderRadius: "30px",
            marginLeft: "auto",
            cursor: "pointer",
          }}
        >
          Contact Sales
        </div>
      </Link>
    </div>
  );
};

export default navbar;
