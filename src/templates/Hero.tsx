import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  // <Background color="bg-gradient-to-r from-violet-400 to-purple-700">
  <Background color="bg-gradient-to-r from-purple-700 to-violet-400">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="/">
            <a className="text-primary-100">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-primary-100">About</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-100 to-purple-300">
              Decentralised naming for
            </span>
            <br />
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-violet-200">
              Keplr wallets
            </span>
          </>
        }
        description={<span className="text-primary-100">coming soon 🚀</span>}
        button={
          <Link href="https://twitter.com/KeplrName">
            <a>
              <Button xl>Follow us on Twitter</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
