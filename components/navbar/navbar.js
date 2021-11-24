import { styles } from "./navbarstyles";
import Image from "next/image";
const navbar = () => {
  return (
    <div className="navbar" style={styles.div}>
      <Image src="/Group.png" alt="logo" width="160" height="40" />
    </div>
  );
};

export default navbar;
