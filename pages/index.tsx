import Link from 'next/link';
import { NextPage } from 'next';

const Page: NextPage = () => {
	return (
		<div className="flex min-h-full flex-col bg-white pt-16 pb-12">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
				<div className="py-16">
					<div className="text-center">
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							{process.env.NEXT_PUBLIC_APP_NAME}
						</h1>
						<div className="mt-6">
							<Link href="/login">
								<a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
									Account Login
								</a>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Page;
