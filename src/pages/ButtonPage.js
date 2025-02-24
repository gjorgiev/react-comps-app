import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log('button clicked!');
  }
  return (
    <div>
      <div>
        <Button primary onClick={handleClick} outlined className="mb-2">
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Secondary
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button success outlined rounded>Success</Button>
      </div>
    </div>
  );
}

export default ButtonPage;