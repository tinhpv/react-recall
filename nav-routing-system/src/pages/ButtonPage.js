import Button from '../components/Button';
import { VscActivateBreakpoints, VscColorMode } from 'react-icons/vsc';

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button secondary rounded>
          <VscActivateBreakpoints />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>
          <VscColorMode />
          Danger Outlined
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button secondary>Secondary Outlined</Button>
      </div>
      <div>
        <Button outline secondary>
          Outlined
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
