'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import NavListData from '@/data/nav-list.json'
import { MoonSVG, SunSVG } from '@/icons'
import styles from './Navigation.module.css'

export function Navigation() {
	const pathname = usePathname()
	const changeThemeBtnRef = useRef<HTMLButtonElement>(null)

	function onClickThemeBtn() {
		changeThemeBtnRef.current?.classList.toggle(styles['dark-mode-btn--active'])
		const isDark = document.body.classList.toggle('dark')

		if (isDark) {
			localStorage.setItem('darkMode', 'dark')
		} else {
			localStorage.setItem('darkMode', 'light')
		}
	}

	useEffect(() => {
		// Search theme in local storage or check user theme.
		if (localStorage.getItem('darkMode') === 'dark') {
			changeThemeBtnRef.current?.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
		} else if (localStorage.getItem('darkMode') === 'light') {
			changeThemeBtnRef.current?.classList.remove('dark-mode-btn--active')
			document.body.classList.remove('dark')
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			changeThemeBtnRef.current?.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
		}

		// Check user theme changes.
		matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const newColorScheme = event.matches ? 'dark' : 'light'

			if (newColorScheme === 'dark') {
				changeThemeBtnRef.current?.classList.add(styles['dark-mode-btn--active'])
				document.body.classList.add('dark')
				localStorage.setItem('darkMode', 'dark')
			} else {
				changeThemeBtnRef.current?.classList.remove(styles['dark-mode-btn--active'])
				document.body.classList.remove('dark')
				localStorage.setItem('darkMode', 'light')
			}
		})
	}, [])

	return (
		<nav className={styles.nav}>
			<div className='container'>
				<div className={styles['nav-row']}>
					<Link href='/' className={styles.logo}>
						<strong>Freelancer</strong> portfolio
					</Link>

					<button
						onClick={() => onClickThemeBtn()}
						ref={changeThemeBtnRef}
						className={styles['dark-mode-btn']}
					>
						<SunSVG className={styles['dark-mode-btn__icon']} />
						<MoonSVG className={styles['dark-mode-btn__icon']} />
					</button>

					<ul className={styles['nav-list']}>
						{NavListData.map(item => (
							<li className={styles['nav-list__item']} key={item.title}>
								<Link
									href={item.pathname}
									className={`${styles['nav-list__link']} ${
										pathname === item.pathname && styles['nav-list__link--active']
									}`}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}
