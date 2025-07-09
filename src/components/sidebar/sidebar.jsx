import logo from './assets/logo.svg';
import feed from './assets/feed.svg';
import about from './assets/about.svg';
import exit from './assets/exit.svg';
import profile from './assets/profile.svg';
import './sidebar.css'

export default function Sidebar() {
	return (
		<aside>
			<img src={logo} alt="Logo do CodeConnect"/>
			<nav> 
				<ul className='lista-sidebar'>
					<li>
						<a href="#" className='lista-link-publicar'>Publicar</a>
					</li>
					<li>
						<a href="#" className='lista-link--ativo'>
							<img src={feed} alt="" />
							<span>Feed</span>
						</a>
					</li>
					<li>
						<a href="#" className='lista-link--intivo'>
							<img src={profile} alt="" />
							<span>Perfil</span>
						</a>
					</li>
					<li>
						<a href="#" className='lista-link--intivo'>
							<img src={about} alt="" />
							<span>Sobre nós</span>
						</a>
					</li>
					<li>
						<a href="#" className='lista-link--intivo'>
							<img src={exit} alt="" />
							<span>Sair</span>
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
