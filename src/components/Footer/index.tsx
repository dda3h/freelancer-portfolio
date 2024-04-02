import { socials } from './socials'
import styles from './Footer.module.css'

export const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles['footer-wrapper']}>
			<ul className={styles.social}>
				{socials.map(social => (
					<li className={styles.social__item} key={social.name}>
						<a href={social.link}>
							{social.icon}
						</a>
					</li>
				))}
			</ul>

			<div className={styles.copyright}>
				<p>© 2022 frontend-dev.com</p>
			</div>
		</div>
	</footer>
)
