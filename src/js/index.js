document.addEventListener("DOMContentLoaded", function () {
	// Iniciar efeito Matrix
	iniciarMatrixEffect();
	
	// Objetivo:
	// Enviar um texto de um formulário para uma API do n8n e exibir o resultado do código html, css e colocar a animação no fundo da tela do site.
	// Passos:
	// 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
	const formulario = document.querySelector(".form-group");
	const descricaoInput = document.getElementById("description");
	const codigoHtml = document.getElementById("html-code");
	const codigoCss = document.getElementById("css-code");
	const secaoPreview = document.getElementById("preview-section");

	formulario.addEventListener("submit", async function (evento) {
		evento.preventDefault(); // Evita o recarregamento da página

		// 2. Obter o valor digitado pelo usuário no campo de texto.
		const descricao = descricaoInput.value.trim();

		if (!descricao) {
			return;
		}

		// 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
		mostrarCarregamento(true);

		// 4. Gerar background dinamicamente baseado na descrição do usuário
		try {
			// Geração local direta, sem dependência de API
			dados = gerarBackgroundDinamico(descricao);

			codigoHtml.textContent = dados.html || "";
			codigoCss.textContent = dados.css || "";

			secaoPreview.style.display = "block";
			secaoPreview.innerHTML = dados.html || "";
			
			// Adicionar aviso se estiver em modo demonstração
			if (dados.html && dados.html.includes('dynamic-bg')) {
				secaoPreview.innerHTML += '<div style="background: linear-gradient(90deg, #00ffaa, #0096ff); color: #0a0f1a; padding: 10px; margin-top: 10px; border-radius: 8px; font-size: 14px; font-weight: bold;">🎨 Projeto Fundo Mágico: Gerado dinamicamente baseado na sua descrição.</div>';
			}

			let tagEstilo = document.getElementById("estilo-dinamico");
			//se essa tag já existir, remover ela antes de criar uma nova
			if (tagEstilo) {
				tagEstilo.remove();
			}

			if (dados.css) {
				tagEstilo = document.createElement("style");
				tagEstilo.id = "estilo-dinamico";
				tagEstilo.textContent = dados.css;
				document.head.appendChild(tagEstilo);
			}
		} catch (error) {
			console.error("Erro ao gerar background:", error);
			
			// Mensagens de erro mais específicas para o usuário
			let mensagemErro = "Ocorreu um erro ao gerar o background. Tente novamente.";
			
			codigoHtml.textContent = `Erro: ${mensagemErro}`;
			codigoCss.textContent = `Erro: ${mensagemErro}`;
			secaoPreview.innerHTML = `<div style="color: #ff6b6b; padding: 20px; text-align: center; border: 1px solid #ff6b6b; border-radius: 8px;">${mensagemErro}</div>`;
		} finally {
			mostrarCarregamento(false);
		}
	});

	function mostrarCarregamento(estaCarregando) {
		const botaoEnviar = document.getElementById("generate-btn");
		const btnText = document.getElementById("btn-text");
		if (estaCarregando) {
			btnText.textContent = "Gerando Background Mágico...";
		} else {
			btnText.textContent = "Gerar Background Mágico";
		}
	}

	function gerarBackgroundDinamico(descricao) {
		const desc = descricao.toLowerCase();
		
		// Extrair cores da descrição
		const cores = {
			vermelho: ['#ff6b6b', '#ee5a24', '#ff4757'],
			azul: ['#0096ff', '#006ba6', '#3742fa', '#5f9ea0', '#00c9ff'],
			verde: ['#00ffaa', '#6ab04c', '#badc58', '#44bd32', '#95afc0'],
			amarelo: ['#f9ca24', '#f0932b', '#ffa500', '#ffd32c'],
			roxo: ['#a55eea', '#8854d0', '#667eea', '#764ba2'],
			laranja: ['#ff9ff3', '#feca57', '#ff6348', '#ff9a00'],
			rosa: ['#ff6b9d', '#ff9ff3', '#ee5a6f', '#f368e0'],
			cinza: ['#747d8c', '#57606f', '#2f3542', '#dfe6e9'],
			preto: ['#2f3542', '#000000', '#1e272e'],
			branco: ['#ffffff', '#f1f2f6', '#dfe6e9'],
			tecnologico: ['#00ffaa', '#0096ff', '#00d4ff', '#00ff88']
		};
		
		// Detectar tipo de background
		let tipoGradiente = 'linear';
		let direcao = '135deg';
		let animacao = '';
		let efeitos = [];
		
		// Análise da descrição para determinar características
		if (desc.includes('radial') || desc.includes('circular')) {
			tipoGradiente = 'radial';
		}
		
		if (desc.includes('horizontal') || desc.includes('lado')) {
			direcao = '90deg';
		} else if (desc.includes('vertical') || desc.includes('cima')) {
			direcao = '180deg';
		} else if (desc.includes('diagonal')) {
			direcao = '45deg';
		}
		
		// Detectar animações
		if (desc.includes('animado') || desc.includes('movimento') || desc.includes('pulsar')) {
			animacao = 'pulse';
		} else if (desc.includes('gradiente') && (desc.includes('mover') || desc.includes('fluir'))) {
			animacao = 'gradient';
		}
		
		// Detectar efeitos especiais
		if (desc.includes('sombra') || desc.includes('shadow')) {
			efeitos.push('box-shadow');
		}
		if (desc.includes('brilhante') || desc.includes('brilho')) {
			efeitos.push('brightness');
		}
		
		// Selecionar cores baseado na descrição
		let coresSelecionadas = [];
		for (const [cor, valores] of Object.entries(cores)) {
			if (desc.includes(cor)) {
				coresSelecionadas.push(...valores.slice(0, 2));
			}
		}
		
		// Detectar palavras-chave tecnológicas
		if (desc.includes('tecnologico') || desc.includes('tech') || desc.includes('digital') || desc.includes('vendramini')) {
			coresSelecionadas.push(...cores.tecnologico.slice(0, 2));
		}
		
		// Se não encontrou cores específicas, usar cores padrão Vendramini
		if (coresSelecionadas.length === 0) {
			coresSelecionadas = ['#00ffaa', '#0096ff'];
		}
		
		// Limitar a 3 cores no máximo
		coresSelecionadas = coresSelecionadas.slice(0, 3);
		
		// Gerar CSS
		let css = `.dynamic-bg {`;
		css += `background: ${tipoGradiente}-gradient(${direcao}, `;
		css += coresSelecionadas.join(', ');
		css += `);`;
		css += `height: 200px;`;
		css += `display: flex; align-items: center; justify-content: center;`;
		css += `color: white; font-size: 24px; font-weight: bold;`;
		css += `border-radius: 16px;`;
		css += `text-shadow: 2px 2px 4px rgba(0,0,0,0.3);`;
		
		// Adicionar efeitos
		if (efeitos.includes('box-shadow')) {
			css += `box-shadow: 0 10px 30px rgba(0,0,0,0.3);`;
		}
		if (efeitos.includes('brightness')) {
			css += `filter: brightness(1.2);`;
		}
		
		// Adicionar animação
		if (animacao === 'pulse') {
			css += `animation: pulse 3s infinite;`;
			css += `} @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }`;
		} else if (animacao === 'gradient') {
			css += `background-size: 400% 100%;`;
			css += `animation: gradient 3s ease infinite;`;
			css += `} @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`;
		} else {
			css += `}`;
		}
		
		// Gerar HTML
		const titulo = descricao.charAt(0).toUpperCase() + descricao.slice(1, 30);
		const html = `<div class="dynamic-bg">${titulo}</div>`;
		
		return {
			html: html,
			css: css
		};
	}

	// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).
	// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
	//    - Mostrar o HTML e CSS gerado em uma área de preview.
	//    - Inserir o CSS retornado dinamicamente na página para aplicar o background.
	// 7. Remover o indicador de carregamento após o recebimento da resposta.
});

function iniciarMatrixEffect() {
	const matrixContainer = document.getElementById('matrixContainer');
	if (!matrixContainer) return;
	
	// Criar colunas de binários
	const numeroColunas = Math.floor(window.innerWidth / 20);
	
	for (let i = 0; i < numeroColunas; i++) {
		criarColunaMatrix(i, matrixContainer);
	}
	
	// Recriar colunas quando a janela for redimensionada
	window.addEventListener('resize', () => {
		matrixContainer.innerHTML = '';
		const novoNumeroColunas = Math.floor(window.innerWidth / 20);
		for (let i = 0; i < novoNumeroColunas; i++) {
			criarColunaMatrix(i, matrixContainer);
		}
	});
}

function criarColunaMatrix(index, container) {
	const coluna = document.createElement('div');
	coluna.className = 'matrix-column';
	coluna.style.left = `${index * 20}px`;
	coluna.style.animationDuration = `${Math.random() * 3 + 2}s`;
	coluna.style.animationDelay = `${Math.random() * 5}s`;
	
	// Gerar string binária aleatória
	const caracteres = '01';
	let textoBinario = '';
	const comprimento = Math.floor(Math.random() * 20) + 10;
	
	for (let i = 0; i < comprimento; i++) {
		textoBinario += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
		if (i < comprimento - 1) textoBinario += '<br>';
	}
	
	coluna.innerHTML = textoBinario;
	container.appendChild(coluna);
	
	// Recriar coluna periodicamente
	setInterval(() => {
		let novoTexto = '';
		const novoComprimento = Math.floor(Math.random() * 20) + 10;
		
		for (let i = 0; i < novoComprimento; i++) {
			novoTexto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
			if (i < novoComprimento - 1) novoTexto += '<br>';
		}
		
		coluna.innerHTML = novoTexto;
	}, Math.random() * 10000 + 5000);
}
