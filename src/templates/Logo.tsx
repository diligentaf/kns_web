import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '30' : '29';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-primary-100 inline-flex items-center ${fontStyle}`}>
      <Image src="/favicon-sm.png" alt="logo" width={size} height={size} />
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x="3" y="12" width="6" height="8" rx="1" />
      <rect x="9" y="8" width="6" height="12" rx="1" />
      <rect x="15" y="4" width="6" height="16" rx="1" />
      <path d="M4 20h14" />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
