import FormComponents from '@/components/FormComponents';

export default function Page() {
	return (
		<div className='container'>
			<div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
				<div className="flex w-[108rem] flex-none justify-end">
					<img
						src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
						alt=""
						className="w-[71.75rem] max-w-none flex-none dark:hidden"
						decoding="async"
					/>
					<img
						src="	https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
						alt=""
						className="hidden w-[90rem] max-w-none flex-none dark:block"
						decoding="async"
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
