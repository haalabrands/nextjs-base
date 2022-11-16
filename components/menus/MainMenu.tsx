import { classNames } from '../../util/helpers';
import menu from '../../data/mainMenu';

interface Props {
	activeModule: string
}

const MainMenu = ({ activeModule }: Props): JSX.Element => {
	return (
		<>
			{menu.map((item) => {
				const uri = item.slug === 'dashboard' ? '' : item.slug;
				const href = '/app/'+uri;

				const activeLink = activeModule === item.slug;

				return (
					<a
						key={item.slug}
						href={href}
						className={classNames(
							activeLink
								? 'border-red text-white'
								: 'border-transparent text-gray-300 hover:text-white hover:border-jacarta-300',
							'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
						)}
						aria-current={activeLink ? 'page' : undefined}
					>
						{item.label}
					</a>
				)
			})}
		</>
	);
};

export default MainMenu;
