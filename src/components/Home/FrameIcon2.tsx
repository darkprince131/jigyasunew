import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.3828 4.11719C18.8711 4.60547 18.8711 5.39844 18.3828 5.88672L8.38281 15.8867C7.89453 16.375 7.10156 16.375 6.61328 15.8867L1.61328 10.8867C1.125 10.3984 1.125 9.60547 1.61328 9.11719C2.10156 8.62891 2.89453 8.62891 3.38281 9.11719L7.5 13.2305L16.6172 4.11719C17.1055 3.62891 17.8984 3.62891 18.3867 4.11719H18.3828Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
