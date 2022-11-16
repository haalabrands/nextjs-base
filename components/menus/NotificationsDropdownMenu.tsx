import Link from 'next/link';

const notifications = [
	{ id: 1, moduleName: 'Example', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', timeAgo: '1h' },
	// More items...
]

const NotificationsDropdownMenu = (): JSX.Element => {
	return (
		<ul role="list" className="divide-y divide-gray-200">
			{notifications.map((notification) => (
				<li key={`Notification_${notification.id}`} className="p-4">
					<div className="flex space-x-3">
						<div className="flex-1 space-y-1">
							<div className="flex items-center justify-between">
								<h3 className="text-sm font-semibold">{notification.moduleName}</h3>
								<p className="text-xs text-gray-400">{notification.timeAgo}</p>
							</div>
							<p className="text-sm text-gray-500">
								{notification.message}
							</p>
						</div>
					</div>
				</li>
			))}
			<li className="text-center p-4">
				<Link href={`/app/notifications`}>
					<a className="block border border-gray-200 bg-white py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
						View all notifications
					</a>
				</Link>
			</li>
		</ul>
	);
};

export default NotificationsDropdownMenu;
