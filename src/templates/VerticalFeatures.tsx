import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your Keplr Username"
    description="No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services."
  >
    <VerticalFeatureRow
      title="One Name For All of Your Addresses"
      description="No more copying and pasting long addresses. Use your ENS name to store all of your addresses and receive any cryptocurrency, token, or NFT."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Find and Buy KNS"
      description="The native name suffix for KNS is .keplr, which has the full security benefits of being blockchain-native."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="KNS Auctions"
      description="KNS Auctions is the place to go for great domain names that are expiring or have been put up for auction."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
