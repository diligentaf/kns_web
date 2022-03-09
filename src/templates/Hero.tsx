import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Decentralised naming for\n'}
            <span className="text-primary-500">Keplr wallets</span>
          </>
        }
        description="coming soon 🚀"
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
