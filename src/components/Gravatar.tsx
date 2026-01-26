import CryptoJS from "crypto-js";

const Gravatar = ({ email="giovanne.almeida91@gmail.com", size = 150 }) => {
  const cleanEmail = email.trim().toLowerCase();
  const hash = CryptoJS.MD5(cleanEmail).toString();
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
  return (
    <img 
      src={gravatarUrl} 
      alt="Perfil" 
      style={{ borderRadius: '50%', width: size, height: size }} 
    />
  );
};

export default Gravatar;