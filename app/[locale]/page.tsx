import Image from 'next/image';

import FormComponents from '@/components/FormComponents';
import darkBg from '@/public/dark-bg.avif';
import lightBg from '@/public/light-bg.avif';

export default function Page() {
  return (
    <div className="container">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <Image
            src={lightBg}
            alt=""
            className="max-w-none flex-none dark:hidden"
            decoding="async"
            width={1148}
            height={334}
          />
          <Image
            src={darkBg}
            alt=""
            className="hidden max-w-none flex-none dark:block"
            decoding="async"
            width={1440}
            height={616}
          />
        </div>
      </div>
      <div className="relative w-full">
        <section className="ml-[250px] p-8">
          <FormComponents />
        </section>
      </div>
    </div>
  );
}
