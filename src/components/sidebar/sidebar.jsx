import logo from './assets/logo.svg';
import './sidebar.css';

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
							<i className="fa-solid fa-file"></i>
							<span>Feed</span>
						</a>
					</li>
					<li>
						<a href="#" className='lista-link--intivo'>
							<i className="fa-solid fa-circle-user"></i>
							<span>Perfil</span>
						</a>
					</li>
					<li>
						<a href="#" className='lista-link--intivo'>
							<i className="fa-solid fa-circle-info"></i>
							<span>Sobre nós</span>
						</a>
					</li>
					<li>
						<a href="#" className='lista-link--intivo'>
							<i className="fa-solid fa-right-from-bracket"></i>
							<span>Sair</span>
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
