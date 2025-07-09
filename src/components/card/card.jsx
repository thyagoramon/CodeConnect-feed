import './card.css';
import cardImg from './assets/card-1.png'
import iconChat from './assets/chat.svg'
import iconCode from './assets/code.svg'
import iconShare from './assets/share.svg'
import userImg from './assets/user-julio.png'

export default function Card() {
	return(
		<article className='card-container'>
			<div className='card-img'>
				<img src={cardImg} alt="Postagem da postagem" />
			</div>
			<div className='card-content'>
				<h2>Titulo do post</h2>
				<p>Descrição do post</p>				
			</div>
			<div className='card-buttons'>
				<div className='card-buttons-left'>
					<div>
						<a href="#">
							<img src={iconCode} alt="" />
						</a>
						<p>0</p>
					</div>
					<div>
						<a href="#">
							<img src={iconShare} alt="" />
						</a>
						<p>0</p>
					</div>
					<div>
						<a href="#">
							<img src={iconChat} alt="" />
						</a>
						<p>0</p>
					</div>
				</div>
				<div className='card-buttons-right'>
					<img src={userImg} alt="foto do usuário Julio" />
					<p>@usuário</p>
				</div>
			</div>
		</article>
	)
}
