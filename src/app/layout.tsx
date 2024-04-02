import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import '@/css/main.css'

export const metadata: Metadata = {
	title: 'Freelancer Portfolio',
	description: 'Freelancer portfolio of a frontend developer with passion for learning and creating'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body>
				<div id='root'>
					<Navigation />

					{children}

					<Footer />
				</div>
			</body>
		</html>
	)
}
