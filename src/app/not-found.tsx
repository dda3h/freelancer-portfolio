export default function NotFound({ title }: { title?: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', margin: 'auto', padding: '10px' }}>
			<p
				style={{
					borderRight: '1px solid var(--not-found-border)',
					padding: '9px 23px 9px 0',
					marginRight: '20px',
					fontSize: '24px',
					fontWeight: 500
				}}
			>
				404
			</p>
			<p>{title ?? 'Page not found.'}</p>
		</div>
	)
}
