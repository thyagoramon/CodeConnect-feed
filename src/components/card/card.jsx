import './card.css';
import iconChat from './assets/chat.svg'
import iconCode from './assets/code.svg'
import iconShare from './assets/share.svg'

export default function Card({id, imagem, titulo, descricao, linhasDeCodigo, compartilhamentos, comentarios, usuario}) {
	return(
		<article className='card-container' id={id}>
			<div className='card-img'>
				<img src={imagem} alt="Postagem da postagem" />
			</div>
			<div className='card-content'>
				<h2>{titulo}</h2>
				<p>{descricao}</p>				
			</div>
			<div className='card-buttons'>
				<div className='card-buttons-left'>
					<div>
						<a href="#">
							<img src={iconCode} alt="" />
						</a>
						<p>{linhasDeCodigo}</p>
					</div>
					<div>
						<a href="#">
							<img src={iconShare} alt="" />
						</a>
						<p>{compartilhamentos}</p>
					</div>
					<div>
						<a href="#">
							<img src={iconChat} alt="" />
						</a>
						<p>{comentarios}</p>
					</div>
				</div>
				<div className='card-buttons-right'>
					<img src={usuario.imagem} alt={`foto do(a) usuário(a) ${usuario.nome}`} />
					<p>@{usuario.nome}</p>
				</div>
			</div>
		</article>
	)
}
