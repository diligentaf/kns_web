import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="The service is coming soon"
      subtitle="To get more info ➡️"
      button={
        <Link href="https://twitter.com/KeplrName">
          <a>
            <Button>Follow Us on Twitter</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
