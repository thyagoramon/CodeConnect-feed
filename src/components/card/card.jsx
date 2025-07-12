import './card.css';

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
						<i className="fa-solid fa-code"></i>
						<p>{linhasDeCodigo}</p>
					</div>
					<div>
						<i className="fa-solid fa-share-nodes"></i>
						<p>{compartilhamentos}</p>
					</div>
					<div>
						<i className="fa-solid fa-comment"></i>
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
