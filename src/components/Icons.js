import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faPinterest,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <ul className="social">
      <li>
        <a href="https://www.instagram.com/silvalot/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/paolla.dasilva.1">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@silvalot">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com/Silvalot2/">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </li>
      <li>
        <a href="https://www.snapchat.com/add/silvalot">
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
      </li>
    </ul>
  );
}
